<template>
  <div class="content">
    <h2>All Concerts</h2>
    <div class="search-container">
      <input
          type="text"
          v-model="searchQuery"
          placeholder="Search concerts"
          class="search-input"
      />
    </div>
    <div class="concerts-list">
      <ConcertCard
          v-for="concert in filteredConcerts"
          :key="concert.id"
          :concert="concert"
      />
    </div>
  </div>
</template>

<script>
import ConcertCard from "@/components/ConcertCard.vue";

export default {
  components: {
    ConcertCard,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    concerts() {
      return this.$store.getters.getConcerts;
    },
    filteredConcerts() {
      return this.concerts.filter((concert) =>
          concert.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 60px;
  padding: 20px;
  overflow-y: auto;
  text-align: center;
}

h2 {
  font-family: Arial, sans-serif;
  font-size: 35px;
  font-weight: 850;
  color: white;
}

.search-container {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 3px solid black;
  border-radius: 8px;
  outline: none;
}

.concerts-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 20px;
  margin-left: 20px;
}
</style>
