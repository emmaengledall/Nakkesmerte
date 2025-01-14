<template>
    <div class="flex items-center justify-center mt-72 "> <!-- Placering på min search bar -->
      <form class="relative w-80 max-w-lg "> <!-- Bredde på min search bar -->

          <!--Mit loop ikon-->
        <button class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            class="w-5 h-5 text-gray-700"
          >
            <path 
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        
        <input
          class="w-full rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
          placeholder="Søg her..."
          required
          type="text"
        />
     
      </form>
    </div>
  </template>
  