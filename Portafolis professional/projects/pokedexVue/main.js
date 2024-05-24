// Component de la Pokédex
Vue.component('pokedex', {
  template: '#pokedex-template',
  // Dades de la Pokédex
  data() {
    return {
      pokemonList: [],
      favorites: [],
      team: [],
      selectedType: '',
      selectedRangeMin: 1,
      selectedRangeMax: 151,
      showFavorites: false,
      showTeam: false
    }
  },
  // Mètodes de la Pokédex
  methods: {
    // Alternar la presència d'un Pokémon a l'equip
    toggleTeam(pokemon) {
      // Si el Pokémon ja està a l'equip, el treiem
      if (this.isInTeam(pokemon)) {
        this.team = this.team.filter(p => p.id !== pokemon.id);
      } 
      // Si l'equip no està ple, afegim el Pokémon a l'equip
      else if (this.team.length < 6) {
        this.team.push(pokemon);
      } 
      // Si l'equip ja està ple, mostrem un missatge d'alerta
      else {
        alert("No pots afegir més de 6 Pokémon a l'equip.");
      }
    },
    // Comprovar si un Pokémon ja està a l'equip
    isInTeam(pokemon) {
      return this.team.some(p => p.id === pokemon.id);
    },
    // Alternar la presència d'un Pokémon a la llista de preferits
    toggleFavorite(pokemon) {
      if (this.isFavorite(pokemon)) {
        this.favorites = this.favorites.filter(p => p.id !== pokemon.id);
      } else {
        this.favorites.push(pokemon);
      }
    },
    // Comprovar si un Pokémon ja està a la llista de preferits
    isFavorite(pokemon) {
      return this.favorites.some(p => p.id === pokemon.id);
    },
    // Capitalitzar una cadena de text
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    // Alternar la visualització de l'equip
    toggleShowTeam() {
      // Si l'equip té 6 Pokémon, alternem la visualització
      if (this.team.length === 6) {
        this.showTeam = !this.showTeam;
      } 
      // Si l'equip no té 6 Pokémon, mostrem un missatge d'alerta
      else {
        alert('El teu equip ha de tenir 6 Pokémon.');
      }
    }
  },
  // Càlculs de la Pokédex
  computed: {
    // Obtenir una llista única de tots els tipus de Pokémon disponibles
    types() {
      const typesSet = new Set();
      this.pokemonList.forEach(pokemon => {
        pokemon.types.forEach(type => typesSet.add(this.capitalize(type.type.name)));
      });
      return Array.from(typesSet);
    },
    // Filtrar la llista de Pokémon segons els criteris seleccionats
    filteredPokemon() {
      let filtered = this.pokemonList.filter(pokemon => 
        pokemon.id >= this.selectedRangeMin && 
        pokemon.id <= this.selectedRangeMax && 
        (this.selectedType === '' || pokemon.types.some(type => type.type.name === this.selectedType.toLowerCase()))
      );
      // Si es mostren els Pokémon preferits, només mostrem aquests
      if (this.showFavorites) {
        filtered = filtered.filter(pokemon => this.isFavorite(pokemon));
        // Si no hi ha Pokémon preferits, mostrem un missatge d'alerta
        if (filtered.length === 0) {
          alert('No hi ha cap Pokémon preferit.');
        }
      }
      // Si es mostra l'equip, només mostrem els Pokémon de l'equip
      if (this.showTeam) {
        filtered = this.team;
      }
      return filtered;
    }
  },
  // Codi que s'executa en la creació del component
  created() {
    // Sol·licitud a l'API de PokeAPI per a la llista de Pokémon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        // Sol·licitud de dades detallades per a cada Pokémon
        Promise.all(data.results.map(pokemon => 
          fetch(pokemon.url).then(response => response.json())
        ))
        .then(pokemons => {
          // Ordenar la llista de Pokémon per ID
          pokemons.sort((a, b) => a.id - b.id);
          // Assignar la llista de Pokémon a les dades del component
          this.pokemonList = pokemons;
        })
      })
      .catch(err => console.log("Error fetching API: " + err.message));
  }
});

// Component de l'Inventari
Vue.component('inventory', {
  template: '#inventory-template',
  // Dades del component
  data() {
    return {
      // Llista d'objectes disponibles a l'inventari
      items: [
        { name: 'Pokéball', icon: 'img/pokeball.png', quantity: 0, maxQuantity: 15 },
        { name: 'Superball', icon: 'img/superball.png', quantity: 0, maxQuantity: 15 },
        { name: 'Ultraball', icon: 'img/ultraball.png', quantity: 0, maxQuantity: 15 },
        { name: 'Potion', icon: 'img/potion.png', quantity: 0, maxQuantity: 5 },
        { name: 'Superpotion', icon: 'img/superpotion.png', quantity: 0, maxQuantity: 5 },
        { name: 'Hyperpotion', icon: 'img/hyperpotion.png', quantity: 0, maxQuantity: 5 },
        { name: 'Elixir', icon: 'img/elixir.png', quantity: 0, maxQuantity: 5 },
        { name: 'Max Elixir', icon: 'img/maxelixir.png', quantity: 0, maxQuantity: 5 }
      ]
    };
  },
  // Mètodes del component
  methods: {
    // Actualitzar la quantitat d'un objecte en l'inventari
    updateQuantity(itemName, quantity) {
      const item = this.items.find(i => i.name === itemName);
      if (item) {
        item.quantity = Math.min(item.maxQuantity, item.quantity + quantity);
      }
    }
  }
});

// Component de la Botiga
Vue.component('shop', {
  template: '#shop-template',
  // Dades del component
  data() {
    return {
      // Llista d'objectes disponibles en la botiga
      shopItems: [ 
        { name: 'Pokéball', icon: 'img/pokeball.png', selectedQuantity: 0 },
        { name: 'Superball', icon: 'img/superball.png', selectedQuantity: 0 },
        { name: 'Ultraball', icon: 'img/ultraball.png', selectedQuantity: 0 },
        { name: 'Potion', icon: 'img/potion.png', selectedQuantity: 0 },
        { name: 'Superpotion', icon: 'img/superpotion.png', selectedQuantity: 0 },
        { name: 'Hyperpotion', icon: 'img/hyperpotion.png', selectedQuantity: 0 },
        { name: 'Elixir', icon: 'img/elixir.png', selectedQuantity: 0 },
        { name: 'Max Elixir', icon: 'img/maxelixir.png', selectedQuantity: 0 }
      ]
    };
  },
  // Mètodes del component
  methods: {
    // Incrementar la quantitat d'un objecte
    increaseQuantity(item) {
      item.selectedQuantity += 1;
    },
    // Decrementar la quantitat d'un objecte
    decreaseQuantity(item) {
      if (item.selectedQuantity > 0) {
        item.selectedQuantity -= 1;
      }
    },
    // Comprar un objecte de la botiga
    purchaseItem(item) {
      this.$emit('purchase', { name: item.name, quantity: item.selectedQuantity });
      item.selectedQuantity = 0;
    }
  }
});

// Instància principal de Vue
new Vue({
  el: '#app',
  // Mètodes
  methods: {
    // Actualizar l'inventari després d'una compra
    updateInventory(purchase) {
      this.$children.forEach(child => {
        if (child.updateQuantity) {
          child.updateQuantity(purchase.name, purchase.quantity);
        }
      });
    }
  }
});
