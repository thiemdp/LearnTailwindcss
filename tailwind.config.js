module.exports = {
  purge:  {
    mode:"all",
    content:[
      './public/**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       
    },
    container:{
      center:true,
      padding:'2rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
