	/** @type {import('tailwindcss').Config} */
	export default {
		content: [
			"./index.html",
			"./src/**/*.{vue,js,ts,jsx,tsx}",
		  ],
		  theme: {
			extend: {
			  fontFamily: {
				'Biryani': ['Biryani', 'Helvetica', 'Arial', 'sans-serif'],
				// You can define multiple font families here as per your requirements
			  },
			},
		  },
		  plugins: [],
	
}

