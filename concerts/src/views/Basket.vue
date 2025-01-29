<template>
  <div class="basket-page">
    <h2>Basket</h2>
    <div class="basket-list">
      <div
          v-for="item in cart"
          :key="item.id"
          class="basket-item"
      >
        <img :src="item.image" alt="Concert Image" />
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>Price: {{ item.price }} $</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
    </div>
    <div class="basket-summary">
      <p>Total: {{ totalPrice }} $</p>
      <button @click="goToPayment">Proceed to Payment</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", id);
    },
    goToPayment() {
      this.$router.push("/payment");
    },
  },
};
</script>

<style scoped>
body{
  font-family: Arial, sans-serif;
}
.basket-page {
  padding: 20px;
  text-align: center;
}

.basket-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.basket-item {
  display: flex;
  gap: 20px;
  align-items: center;
  border: 2px solid white;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  margin-top: 30px;

}

.basket-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.item-info h3 {
  font-size: 18px;
  margin: 0;
  color: white;
}

.item-info p {
  font-size: 16px;
  margin: 5px 0;
  color: white;
}

button {
  padding: 10px 15px;
  background-color: brown;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: darkred;
}

.basket-summary {
  margin-top: 45px;
  text-align: center;
}

.basket-summary p {
  font-size: 35px;
  font-weight: 800;
  color: white;
  margin-bottom: 25px;
}
</style>
