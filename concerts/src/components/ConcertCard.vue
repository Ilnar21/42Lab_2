<template>
  <div class="concert-card">
    <img :src="concert.image" alt="Concert Image" class="concert-image" />
    <div class="concert-info">
      <h3>{{ concert.name }}</h3>
      <p> <b>City:</b> {{ concert.city }}</p>
      <p><b>Date:</b> {{ concert.date }}</p>
      <p><b>Start:</b> {{ concert.time }}</p>
      <p><b>Ticket price:</b> {{ concert.price }} $</p>
      <button @click="toggleCart">
        {{ isInCart ? 'Remove from cart' : 'Buy a ticket' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    concert: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isInCart() {
      return this.$store.getters.isInCart(this.concert.id);
    },
  },
  methods: {
    toggleCart() {
      if (this.isInCart) {
        this.$store.dispatch('removeFromCart', this.concert.id);
      } else {
        this.$store.dispatch('addToCart', this.concert);
      }
    },
  },
};
</script>


<style scoped>
.concert-card {
  width: 400px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 25px;
}

.concert-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.concert-info {
  padding: 15px;
}

.concert-info h3 {
  font-size: 28px;
  font-weight: 600;
  color: black;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
}

.concert-info p {
  font-size: 18px;
  color: black;
  margin-bottom: 5px;
  font-weight: 500;
  font-family: Arial, sans-serif;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  font-weight: 700;
  background-color: brown;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

button:hover {
  background-color: darkred;
}
</style>