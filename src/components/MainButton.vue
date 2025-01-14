<style scoped>
  button {
    color: #090909;
    padding: 1.4em 2.3em;
    font-size: 18px;
    border-radius: 2.0em;
    background: #ffffff;
    cursor: pointer;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 3px 3px 6px #8b8a8a;
  }

  button:hover {
    border: 1px solid white;
  }

  button:active {
    box-shadow: 6px 6px 14px #797979;
  }
</style>

<template >
    <div class="grid grid-cols-2 grid-rows-2 gap-4 pt-10 items-center justify-center place-items-center">

    <div class="pl-5">
        <button>Button 1</button> 
    </div>

    <div class="pr-5">
        <button>Button 2</button>
    </div>

    <div class="pl-5">
        <button>Button 3</button>
    </div>

    <div class="pr-5">
        <button>Button 4</button>
    </div>


</div>
</template>
