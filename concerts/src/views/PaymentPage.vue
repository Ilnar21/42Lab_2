<template>
  <div class="payment-page">
    <h2>Payment</h2>
    <p>Total amount: {{ totalPrice }} $</p>
    <div class="email-input">
      <h3>Enter your email for tickets:</h3>
      <input type="email" v-model="email" placeholder="Your email" />
    </div>
    <div class="payment-methods">
      <h3>Choose a payment method:</h3>
      <button @click="payNow('Credit Card')">Credit Card</button>
      <button @click="payNow('PayPal')">PayPal</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  computed: {
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
  methods: {
    payNow(method) {
      alert(`You have chosen to pay via ${method}.
      Total: ${this.totalPrice} $`);
    },
  },
};
</script>

<style scoped>
.payment-page {
  text-align: center;
  padding: 20px;
  margin-top: 100px;
}

.payment-page h2 {
  font-size: 30px;
  margin-bottom: 150px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  color: white;
}

.payment-page p {
  font-size: 25px;
  font-weight: 700;
  color: white;
  font-family: Arial, sans-serif;
}

.payment-methods {
  font-family: Arial, sans-serif;
  margin-top: 10px;
}

.payment-methods h3 {
  font-size: 18px;
  font-weight: 700;
  color: white;
  font-family: Arial, sans-serif;
}

.payment-methods button {
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: brown;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.payment-methods button:hover {
  background-color: darkred;
}

.email-input {
  margin-top: 20px;
}

.email-input h3 {
  font-size: 15px;
  font-weight: 700;
  color: white;
  font-family: Arial, sans-serif;
}

.email-input input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}
</style>