<script setup>
import myImage from '@/assets/pics/user.png'; // Adjust the path accordingly
</script>

<template>
  <header class="header grid grid-cols-2 w-full p-4">
    <!-- Left side with dots -->
    <div class="dots-container flex justify-start items-center">
      <span class="row">
        <span class="dot"></span>
        <span class="dot"></span>
      </span> 
      <span class="row-bottom">
        <span class="dot"></span>
        <span class="dot"></span>
      </span>
    </div>

    <!-- Right side with PNG -->
    <div class="image-container flex justify-end items-center">
      <img :src="myImage" alt="Description of the image" class="w-10 h-10"/>
    </div>
  </header>
</template>

<style scoped>
/* Grid layout for header */
.header {

  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide the header into 2 equal parts */
  width: 100%; /* Ensure full width of the screen */
  align-items: center; /* Vertically center the content */
  padding: 1rem; /* Optional padding */
  /* margin-top: 2rem; */
}

/* Styling for the dots */
.dots-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.row, .row-bottom {
  display: flex;
 
}

.dot {
margin: 3px;
padding: 2px;
  width: 8px;
  height: 8px;
  border: 2px solid black;
  background-color: black;
  border-radius: 50%;
  transition: all 0.2s;
}

/* Image container styling */
.image-container img {
  width: 40px; /* Adjust image size */
  height: 40px; /* Adjust image size */
}
</style>



  
  
