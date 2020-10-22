<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <StartComponent msg="Start Your journey to Vue.js"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StartComponent from '@/components/StartComponent.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    StartComponent
  }
})
</script>
