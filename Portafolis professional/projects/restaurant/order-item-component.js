// Defineix un component personalitzat per representar un element de la comanda
class OrderItemComponent extends HTMLElement {
  constructor() {
    super();
    // Crea i connecta un "shadow root" per encapsular l'estil i el comportament del component
    this.attachShadow({ mode: 'open' });
  }

  // S'executa quan el component és afegit al DOM
  connectedCallback() {
    const name = this.getAttribute('name');
    const price = parseFloat(this.getAttribute('price')).toFixed(2);

    this.shadowRoot.innerHTML = `
      <style>
        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .order-item div {
          display: flex;
          align-items: center;
        }
        button {
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-left: 10px;
        }
        button:hover {
          background-color: #0056b3;
        }
        .remove-item {
          background-color: #dc3545;
        }
        .remove-item:hover {
          background-color: #c82333;
        }
      </style>
      
      <div class="order-item">
        <span>${name} - ${price}€</span>
        <button class="remove-item" data-price="${price}">Eliminar</button>
      </div>
    `;
    // Escolta l'esdeveniment de clic al botó d'eliminar per eliminar l'element de la comanda
    this.shadowRoot.querySelector('.remove-item').addEventListener('click', () => {
      const price = parseFloat(this.getAttribute('price'));
      // Dispara un esdeveniment personalitzat per eliminar l'element de la comanda
      const removeFromOrderEvent = new CustomEvent('remove-from-order', { detail: { price } });
      this.dispatchEvent(removeFromOrderEvent);
      this.remove();
      // Obté l'element 'order-component' i elimina el plat de la comanda
      const orderComponent = document.querySelector('order-component');
      orderComponent.removeFromOrder(price);
    });
  }
}

// Registra el component personalitzat 'order-item' per ser utilitzat en el DOM
customElements.define('order-item', OrderItemComponent);