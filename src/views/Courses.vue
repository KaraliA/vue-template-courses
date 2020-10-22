<template>
  <div class="courses">
    <h1>Available courses for {{ level }} level</h1>
    <div class="card" v-for="item in course" :key="item.title">
      <img src="https://coursesblogs.com/wp-content/uploads/2020/06/339470-PAMQMU-87.jpg" alt="courses" style="width:100%">
      <h2>{{ item.title }}</h2>
      <ul class="details">
        <li>Author: {{ item.author }}</li>
        <li>Level: {{ item.level }}</li>
        <li>Duration: {{ item.hours }} hours</li>
        <li>Viewed: 5 times</li>
      </ul>
      <p class="description">{{ item.description }}</p>
      <button @click="addCourse(item)">Start</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Courses',
    computed: {
      level() {
        return this.$route.params.level;
      },
      course() {
        return this.$store.getters.getCoursesByLevel(this.level);
      }
    },
    methods: {
      addCourse(item) {
        this.$store.commit('addCourse', {
          title: item.title,
          level: item.level,
          author: item.author,
          hours: item.hours,
          description: item.description
        });
      }
    },
    created () {
      this.$store.dispatch('getAllCourses');
    }
})
</script>

<style scoped lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #2c3e500a;
  max-width: 500px;
  margin: 2% auto;
  text-align: center;
  font-family: arial;
  .details {
    list-style: none;
    padding-inline-start: 0;
    li {
      color: grey;
      font-size: 20px;
    }
  }
  .description {
    margin: 0 7%;
  }
  button {
    border: none;
    outline: 0;
    margin-top: 2%;
    padding: 12px;
    color: white;
    background-color: #2c3e50;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>