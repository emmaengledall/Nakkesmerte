<style scoped>
  button {
    color: #090909;
    padding: 1.5em 2.8em;
    border-radius: 2.0em;
    background: #ffffff;
    cursor: pointer;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
  }

  button:hover {
    border: 1px solid white;
  }

  .circle-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Space between circles */
}

.circle {
  width: 20px; /* Size of the circle */
  height: 20px; /* Size of the circle */

  background-color: #1D4ED8; /* Blue color */
}

</style>

<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-4  items-center justify-center place-items-center font-extralight text-lg">

    <div class="pl-5">
      <button class="shadow-md w-44 flex items-center justify-center gap-x-2">
        <img src="/src/assets/pics/oevelser.png" alt="icon" class="h-10 w-auto pr-3" />
        Øvelser
      </button>
    </div>

    <RouterLink to="/about">
      <div class="pr-5">
        <button class="shadow-md w-44 flex items-center justify-center gap-x-2">
          <img src="/src/assets/pics/spil.png" alt="icon" class="h-10 w-auto pr-2" />
          Skærmtid
        </button>
      </div>
    </RouterLink>

    <div class="pl-5"> 
      <button class="shadow-md w-44 flex items-center justify-center gap-x-2">
        <img src="/src/assets/pics/gave.png" alt="icon" class="h-10 w-auto pr-3" />
        Kontakt
      </button>
    </div>

    <div class="pr-5">
  <button class="shadow-md w-auto flex items-center justify-center">
    <img src="/src/assets/pics/plan.png" alt="icon" class="h-10 w-auto pr-2" />
    Din plan
  </button>
</div>

  </div>

  <!-- Graf til homepage <33 -->
  <div class="p-5">

  <div class="circle-container absolute">
  <div class="circle ml-16"></div>
  <div class="circle ml-16"></div>
  <div class="circle ml-16"></div>
  <div class="circle ml-16"></div>
  <div class="circle ml-16"></div>
  <!-- You can add more circles here -->
</div>



    <p class="text-start text-lg font-light leading-10 absolute pt-7 pl-4">
  5 +<br>
  4<br>
  3<br>
  2<br>
  1<br>
</p>
    <button class="shadow-md w-full h-64">


  
      <!-- Additional content for the graph button -->
      <p class="w-full flex items-start justify-start pt-48 font-light tracking-[0.70em] pl-5 text-lg">M T O T F L S</p>

      
    </button>
  </div>
</template>
