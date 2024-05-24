// Defineix un component personalitzat per mostrar la comanda del client
class OrderComponent extends HTMLElement {
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
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Títol a l'esquerra */
        }
        /* Estil per a la comanda */
      </style>
      <h2>Comanda</h2>
      <ul id="order-items"></ul>
      <p>Total: <span id="total">0</span>€</p>
    `;
    this.orderItemsContainer = this.shadowRoot.querySelector('#order-items');
    this.totalElement = this.shadowRoot.querySelector('#total');
    this.total = 0;

    // Escolta l'esdeveniment personalitzat per afegir un plat a la comanda
    document.addEventListener('add-to-order', event => {
      const { name, price } = event.detail;
      this.addToOrder(name, price);
    });

    // Escolta l'esdeveniment personalitzat per eliminar un plat de la comanda
    this.shadowRoot.addEventListener('remove-from-order', event => {
      const { price } = event.detail;
      this.total -= price;
      this.totalElement.textContent = this.total.toFixed(2);
    });
  }

  // Afegeix un plat a la comanda i actualitza el total
  addToOrder(name, price) {
    this.total += price;
    this.totalElement.textContent = this.total.toFixed(2);
    const orderItem = document.createElement('order-item');
    orderItem.setAttribute('name', name);
    orderItem.setAttribute('price', price);
    this.orderItemsContainer.appendChild(orderItem);
  }

  // Elimina un plat de la comanda i actualitza el total
  removeFromOrder(price) {
    this.total -= price;
    this.totalElement.textContent = this.total.toFixed(2);
  }
}

// Registra el component personalitzat 'order-component' per ser utilitzat en el DOM
customElements.define('order-component', OrderComponent);
