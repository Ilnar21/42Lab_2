<template>
  <nav>
    <router-link class="logo" to="/">
      <h1>World Concerts</h1>
    </router-link>
    <div class="right-section">
      <router-link class="cart" to="/basket">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff"
        >
          <path
              d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z"
          />
        </svg>
        <p>Basket</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 100%;
  height: 70px;
  background-color: brown;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  max-width: 1550px;
}

h1 {
  color: white;
  font-family: Arial,sans-serif;
  font-size: 35px;
  margin-left: 20px;
  font-weight: 800;
}

.right-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
  font-family: Arial, sans-serif;
}



.cart {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
}

.cart svg {
  margin-right: 8px;
}

nav p {
  font-weight: 600;
  font-size: 14px;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
