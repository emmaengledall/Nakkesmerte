<script setup>
import SearchBar from '@/components/SearchBar.vue'; // Adjust path as needed 
import MainButton from '@/components/MainButton.vue'; 
import Header from '@/components/Header.vue'; // Adjust path as needed 

</script>

<template>

  <main>


  <div> 
    <Header></Header>

    <div class="pl-10 font-Biryani">
      <h3 class="text-xs">Godt at se dig igen</h3>
      <h1 class="text-4xl">Rikke Hjort!</h1>
    </div>

    <SearchBar />
    <MainButton /> 
  </div>

 
    
  </main>
</template>
