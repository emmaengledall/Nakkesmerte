<script setup>
import { RouterLink, RouterView } from 'vue-router'




// import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <div class="bg"> 
  
  <header>
    <div>
    <BubbleSketch :incrementPoint="incrementPoints" />
    <p> {{ points }}</p> <!-- Display points -->
  </div>
    

    <div class="wrapper">
      

      <nav>
      
        <RouterLink to="/about"></RouterLink>
        <RouterLink to="/login"></RouterLink>

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
