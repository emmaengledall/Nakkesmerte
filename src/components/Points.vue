<template>
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
         <!-- Streak Circle -->
      <div class="circless text-white">
        <p class="font-extralight">21 dage <br> streak!</p>
      </div>

    </div>
  </template>
  

  <script>
  export default {
    data() {
      return {
        points: 0, // Reactive property for points
      };
    },
    methods: {
      incrementPoints() {
        this.points += 1; // Increment points on button click
      },
    },
  };
  </script>
  
  <style scoped>
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
    width: 100px;
    height: 100px;
    border: 2px solid #ffffff;
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

#storCirkel {
    
}




  </style>
  