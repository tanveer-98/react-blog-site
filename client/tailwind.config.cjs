// import {} from './src/assets/background.jpg'
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
      'xsm':'400px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      '2xl':'1536px',
  
      extend: {
        backgroundImage: {
          // darkImg: "url('./assets/background3.jpg')",
          // 'footer-texture': "url('/img/footer-texture.png')",
        },
      
          colors: {
            strongCyan: 'hsl(171, 66%, 44%)',
            lightBlue: 'hsl(233, 100%, 69%)',
            darkGrayishBlue: 'hsl(210, 10%, 33%)',
            grayishBlue: 'hsl(201, 11%, 66%)',
          },
        
            fontFamily:{
              'burtons' : "burtons",
              'poppins': ['Poppins', 'sans-serif'],
              'Roboto_Mono': ['Roboto Mono', 'monospace'],
              'Gemini_Libre': ['Gemunu Libre', 'sans-serif'],
              sans: ['Bai Jamjuree', 'sans-serif'],
              merryWeather:['Merriweather', 'serif']
            },
            
        
        
        spacing: {
            '128': '32rem',
            '144': '36rem',
          },
          borderRadius: {
            '4xl': '2rem',
          }
          ,
          boxShadow:{
            'neon': '0 0 30px #2196f3, 0 0 20px #2196f3, 0 0 10px #2196f3'
          }
      },
      
    },
    plugins: [
        require('tw-elements/dist/plugin'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
  }