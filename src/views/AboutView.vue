<script setup>
import Header from '@/components/Header.vue'; 
import Points from '@/components/Points.vue'; 
import BubbleSketch from '@/components/BubbleSketch.vue'; 
import backImage from '@/assets/pics/arrows.png'; // Juster stien hvis nødvendigt

import { ref } from 'vue'; // Import af `ref` til reaktive variabler

// Reactive points variable
const points = ref(0);



// Function to update points
function updatePoints(pointsEarned) {
  points.value += pointsEarned;
  console.log('Points updated:', points.value); // Debugging output
}



</script>

<template>
  <main>
    <div> 
      <!-- Header komponent -->
      <Header class="mt-5 pb-5"> </Header>

      <!-- Back button -->
      <RouterLink to="/">
        <div class="image-container absolute flex justify-start items-center pl-4 z-50">
          <img :src="backImage" alt="Back" class="w-5 h-5"/>
        </div>
      </RouterLink>

      <div class="circles-container pl-36">
    <div id="storCirkel" class="circle text-white">
      <p class="font-extralight">
        Points <br>
        <span class="big-points text-5xl font-extralight">{{ points }}</span>
      </p>
    </div>
  </div>

      <!-- Tekst og information -->
      <div class="absolute pl-10 font-Biryani"> 
        <h3 class="text-sm font-extralight leading-6 pl-2">Score du på din lave</h3>
        <h1 class="text-4xl font-light pl-2">skærmtid?</h1>
        <h3 class="font-extralight mt-7">Tillykke! Du har optjent flere friheds bobler! 
          <br>Pop dem for få dine point 
        </h3>
      </div>

      <!-- Points komponent -->
      <Points :points="points.value" />

      <!-- BubbleSketch komponent -->
      <BubbleSketch @add-points="updatePoints" /> <!-- Lyt til add-points event -->

    </div>
  </main>
</template>

<style>
.circles-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 38px;
    margin-left: 64px;
    
  }
  
  /* Circle Styling */
  .circle {
    position: absolute;
    width: 120px;
    height: 120px;
    /* border: 2px solid #ffffff; */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 36px;
  }

  .circless {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 10%;
  }
  
  /* Optional: Button Styling */
  button {
    margin-top: 20px;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
  }

  .circle {
  background-color: #FF9924;
  opacity: 80%;
  transition: background-color 0.3s ease;
}

</style>
