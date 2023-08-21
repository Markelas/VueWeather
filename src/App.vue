<template>
  <div class="container with-nav">
    <div class="navbar">
      <h2>Погода</h2>
    </div>
    <div class="card">
      <h2>Погода в РФ</h2>
      <select v-model="selected" class="form-control" @click="load">
        <option disabled value="">Выберите название города</option>
        <option v-for="item in cityList" :key="item">{{ item }}</option>
      </select>
      <!-- <button class="btn primary">
        Узнать погоду в {{ selected }}
      </button> -->
      <div>
        <h3 v-if="selected">
          Погода в городе {{ selected }} сейчас:
          {{ this.$store.state.cityTemp }}
          градусов цельсия
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      selected: "",
      cityList: this.$store.state.city,
    };
  },
  computed: {},
  methods: {
    load() {
      return this.$store.dispatch("loadWeather", this.selected);
    },
  },
});
</script>

<style></style>
