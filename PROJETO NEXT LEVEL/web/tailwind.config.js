module.exports = {
  content: ["./src/**/*.html,js"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
        //aqui estamos dando cores especificas para o 300 e o 500.
      },
      borderRadius:{
        md:'4px'
      }
      //aqui estamos dizendo que o valor de md do borderRadius é 4px, pois ele pula do sm que é 2px para o md que fica 6px,
      //e nesse momento precisamos somente de 4px, isso é sobrescrever
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
