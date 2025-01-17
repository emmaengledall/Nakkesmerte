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
</style>

<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-4 pt-5 items-center justify-center place-items-center font-extralight text-lg">

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
        <img src="/src/assets/pics/kontakt.png" alt="icon" class="h-10 w-auto pr-3" />
        Kontakt
      </button>
    </div>

    <div class="pr-5">
      <button class="shadow-md w-44 flex items-center justify-center gap-x-2">
        <img src="/src/assets/pics/plan.png" alt="icon" class="h-10 w-auto pr-7" />
        Plan
      </button>
    </div>

  </div>

  <!-- Graf til homepage <33 -->
  <div class="p-5 mt-5">
    <button class="shadow-md w-full h-64">
      <!-- Additional content for the graph button -->
    </button>
  </div>
</template>
