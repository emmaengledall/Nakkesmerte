<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <div class="bg">
  
  <header>
    

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>

      </nav>
    </div>


  </header>

  <RouterView />

</div>
</template>



<style scoped>

.bg {
  background: linear-gradient(180deg, #ffffff 0%, #FF9D2E 100%);
  height: 100vh; /* Full viewport height */
}



</style>
