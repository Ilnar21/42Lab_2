<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.content h2{
  font-family: Arial, sans-serif;
  font-size: 35px;
  font-weight: 850;
}
</style>
