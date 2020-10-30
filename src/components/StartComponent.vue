<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>For a quick start choose your level.</h3>
    <ul>
      <li v-for="level in levels" :key="level">
        <router-link :to="{name: 'Courses', params: {level: level}}">{{ level }}</router-link>
        <p>times viewed: {{ timesViewedByLevel(level) }}</p>
      </li>
    </ul>
    <h3>Want to acquaint with Vue.js documentation yourself?</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a></li>
      <li><a href="https://vuex.vuejs.org/" target="_blank" rel="noopener">Vuex</a></li>
      <li><a href="https://cli.vuejs.org/" target="_blank" rel="noopener">Vue CLI</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Vue devtools</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'StartComponent',
  props: {
    msg: String
  },
  computed: {
    levels() {
      return this.$store.getters.levels;
    }
  },
  methods: {
    timesViewedByLevel(level)  {
      return this.$store.getters.getTimesViewedOfCoursesByLevel(level);
    }
  },
  created() {
    this.$store.dispatch('getAllLevels');
    this.$store.dispatch('getAllCourses');
  }
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
