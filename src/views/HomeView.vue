<script setup>
import SearchBar from '@/components/SearchBar.vue'; // Adjust path as needed 
import MainButton from '@/components/MainButton.vue'; 
import Header from '@/components/Header.vue'; 
import Points from '@/components/Points.vue'; 

</script>

<template>

  <main class="">


  <div class=""> 
    <Header class="mt-5"></Header>
    <div class="absolute pl-10 font-Biryani"> 
      <h3 class="text-xs font-extralight leading-6">Godt at se dig igen</h3>
      <h1 class="text-4xl font-light">Rikke Hjort!</h1>
    </div>
    <Points></Points>
    <SearchBar />
    <MainButton /> 
  </div>

 
    
  </main>
</template>
