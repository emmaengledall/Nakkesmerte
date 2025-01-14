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

<template >
    <div class="grid grid-cols-2 grid-rows-2 gap-4 pt-10 items-center justify-center place-items-center font-extralight text-s">

    <div class="pl-5 ">
        <button class="shadow-md">Øvelser</button> 
    </div>

    <RouterLink to="/about">
    <div class="pr-5">
        <button class="shadow-md">Skærmtid</button>
    </div>
  </RouterLink>

    <div class="pl-5">
        <button class="shadow-md">Kontakt</button>
    </div>

    <div class="pr-5">
        <button class="shadow-md ">Din plan</button>
    </div>


</div>
</template>
