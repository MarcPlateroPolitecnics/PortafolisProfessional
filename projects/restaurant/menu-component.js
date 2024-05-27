// Defineix un component personalitzat per mostrar la carta del restaurant
class MenuComponent extends HTMLElement {
  constructor() {
    super();
    // Crea i connecta un "shadow root" per encapsular l'estil i el comportament del component
    this.attachShadow({ mode: 'open' });
  }

  // S'executa quan el component és afegit al DOM
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
        :host {
          display: block;
          text-align: center;
        }
        h1 { text-align: center; }
        .menu-categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        .menu-category {
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          width: 320px;
          text-align: center;
        }
        .menu-category img {
          display: block;
          margin: 0 auto; /* Centra la imatge */
          width: 100%;
          border-radius: 10px;
        }
        .menu-category > div {
          display: flex;
          flex-direction: column;
          align-items: center; /* Centra text i botó */
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        
        li {
          margin-bottom: 20px;
        }
      </style>
      
    <h1>Carta del Restaurant</h1>
    <div class="menu-categories">
      <div class="menu-category" id="primers">
        <h2>Primers</h2>
        <ul id="primers-list"></ul>
      </div>
      <div class="menu-category" id="segons">
        <h2>Segons</h2>
        <ul id="segons-list"></ul>
      </div>
      <div class="menu-category" id="postres">
        <h2>Postres</h2>
        <ul id="postres-list"></ul>
      </div>
      <div class="menu-category" id="begudes">
        <h2>Begudes</h2>
        <ul id="begudes-list"></ul>
      </div>
    </div>
  `;

    const primersList = this.shadowRoot.querySelector('#primers-list');
    const segonsList = this.shadowRoot.querySelector('#segons-list');
    const postresList = this.shadowRoot.querySelector('#postres-list');
    const begudesList = this.shadowRoot.querySelector('#begudes-list');

    const dishes = [
      { name: 'Amanida Cèsar', image: './img/amanidaCesar.jpg', price: 8, allergens: ['Gluten', 'Lactosa'], category: 'primers' },
      { name: 'Llenties Estofades', image: './img/llentiesEstofades.jpg', price: 12, allergens: ['Gluten', 'Lactosa'], category: 'primers' },
      { name: 'Crema de Verdures', image: './img/cremaVerdures.jpg', price: 9, allergens: ['Gluten', 'Lactosa'], category: 'primers' },
      { name: 'Paella', image: './img/paella.jpeg', price: 15, allergens: ['Gluten', 'Crustacis', 'Peix'], category: 'segons' },
      { name: 'Llom amb Salsa de Bolets', image: './img/llom.jpg', price: 17, allergens: ['Lactosa'], category: 'segons' },
      { name: 'Entrecot de Vedella', image: './img/entrecot.jpg', price: 19, allergens: [], category: 'segons' },
      { name: 'Tiramisú', image: './img/tiramisu.jpg', price: 6, allergens: ['Gluten', 'Lactosa', 'Ous'], category: 'postres' },
      { name: 'Pastís de Formatge', image: './img/pastisFormatge.jpg', price: 7, allergens: ['Gluten', 'Lactosa', 'Ous'], category: 'postres' },
      { name: 'Gelat de Vainilla', image: './img/gelatVainilla.jpg', price: 4, allergens: ['Lactosa'], category: 'postres' },
      { name: 'Aigua Mineral', image: './img/aigua.png', price: 2, allergens: [], category: 'begudes' },
      { name: 'Vi Blanc', image: './img/viBlanc.jpg', price: 5, allergens: [], category: 'begudes' },
      { name: 'Cervesa Artesana', image: './img/cervesa.jpg', price: 4, allergens: ['Gluten'], category: 'begudes' },
    ];

    // Itera sobre els plats i crea elements HTML per a cada un
    dishes.forEach(dish => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div>
          <img src="${dish.image}" alt="${dish.name}" width="100">
          <h3>${dish.name}</h3>
          <p>Preu: ${dish.price}€</p>
          <p>Al·lèrgens: ${dish.allergens.join(', ')}</p>
          <button class="add-to-order" data-name="${dish.name}" data-price="${dish.price}">Afegir a la comanda</button>
        </div>
      `;

      switch (dish.category) {
        case 'primers':
          primersList.appendChild(listItem);
          break;
        case 'segons':
          segonsList.appendChild(listItem);
          break;
        case 'postres':
          postresList.appendChild(listItem);
          break;
        case 'begudes':
          begudesList.appendChild(listItem);
          break;
        default:
          break;
      }
    });

    // Gestiona l'esdeveniment de clic del botó "Afegir a la comanda" per afegir un plat a la comanda
    this.shadowRoot.addEventListener('click', event => {
      if (event.target.classList.contains('add-to-order')) {
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);
        const addToOrderEvent = new CustomEvent('add-to-order', { detail: { name, price } });
        document.dispatchEvent(addToOrderEvent);
      }
    });
  }
}

// Registra el component personalitzat 'menu-component' per ser utilitzat en el DOM
customElements.define('menu-component', MenuComponent);
