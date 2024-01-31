// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



export default {
  darkMode: 'class', // Habilita o Dark Mode usando a classe no HTML
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#2b3945',
          elements: '#202c37',
          
          
          // Define a cor de fundo padrão para o modo escuro
        },
      },
    },
  },
  plugins: [],
};
