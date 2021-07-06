const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxsm: "400px",
      xsm: "500px",
      ...defaultTheme.screens,
    },
    borderWidth: {
      10: "10px",
      15: "15px",
    },
    rotate: { 
      '12': "12deg" ,
      '-12': "-12deg" ,
      '25': "25deg" ,
      '30': "30deg" ,
      '45': "45deg" 
    },
    extend: {
      screens: {},
      colors: {
        green: "#0b9446",
        black: "#2a2c2a",
        red: "#d71d24",
        yellow: "#ffd962",
        orange: "#e94e24",
        skin: "#ffeed8",
        blue: "#003c74",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        90: "90% !important",
        100: "100% !important"
      },
      height: {
        wFull: "100vw",
        vh: "85vh",
        '32': "34vw",
        '370': "370px",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      padding: {
        '140': '140%',
        
       },
      inset: {
        '1/10': '10%',
        '1/20': '5%',
        '1/4': '25%',
       },
       margin: {
        '1/4': '25%',
        '19%': '19%',
       },
       fontSize: {
        '7.5xl': '5rem',
        '6vw': '6vw',
        '7vw': '7vw',
        '8vw': '8vw',
       }
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
   
  },
  variants: {
    extend: {
      display: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
}
