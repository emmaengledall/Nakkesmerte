<script setup>
import Header from '@/components/Header.vue'; 
import Points from '@/components/Points.vue'; 
import Bobler from '@/components/BubbleSketch.vue'; 

</script>

<template>

  <main>
    <div class="circles-container pl-36">

<!-- point Circle -->
<div id="storCirkel" class="circle  text-white ">
  <p class="font-extralight">
   Points <br>
  <span @click="incrementPoints" class="big-points text-5xl font-extralight">{{ points }}</span>
  </p>
</div>
<!-- Button til at updatere point -->
<!-- <button @click="incrementPoints">Add Point</button> -->
</div>



  <div> 
    <Header class=""></Header>
    <div class="absolute pl-10 font-Biryani"> 
      <h3 class="text-xs font-extralight leading-6">Score du på din lave</h3>
      <h1 class="text-4xl font-light">skærmtid?</h1>
      <h3 class="font-extralight mt-20">Tillykke! Du har optjent flere friheds bobler! 
          <br>Pop dem for få dine point </h3>
    </div>
    <Points></Points>
    <Bobler class="pl-10 pt-40"></Bobler>
   
  </div>

 
    
  </main>
</template>

