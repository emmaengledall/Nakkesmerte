<script setup>
import Header from '@/components/Header.vue'; 
import Points from '@/components/Points.vue'; 
import Bobler from '@/components/BubbleSketch.vue'; 
import backImage from '@/assets/pics/arrows.png'; // Adjust the path accordingly

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

    <RouterLink to="/">
    <div class="image-container absolute flex justify-start items-center pl-4 z-50">
      <img :src="backImage" alt="Description of the image" class="w-5 h-5"/>
    </div>
  </RouterLink>

    <div class="absolute pl-10 font-Biryani"> 
      <h3 class="text-xs font-extralight leading-6 pl-2">Score du på din lave</h3>
      <h1 class="text-4xl font-light pl-2">skærmtid?</h1>
      <h3 class="font-extralight mt-16">Tillykke! Du har optjent flere friheds bobler! 
          <br>Pop dem for få dine point </h3>
    </div>
    <Points></Points>
    <Bobler class=""></Bobler>
   
  </div>

 
    
  </main>
</template>

