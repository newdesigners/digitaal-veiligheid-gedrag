module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    spacing: {
      0: "0px",
      px: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      12: "12px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      25: "25px",
      30: "30px",
      34: "34px",
      36: "36px",
      40: "40px",
      50: "50px",
      60: "60px",
      70: "70px",
      80: "80px",
      85: "85px",
      90: "90px",
      100: "100px",
      105: "105px",
      110: "110px",
      120: "120px",
      124: "124px",
      130: "130px",
      140: "140px",
      150: "150px",
      160: "160px",
      170: "170px",
      185: "185px",
      200: "200px",
      210: "210px",
      230: "230px",
      '1rem': '1rem',
      'header': "theme(height.header)",
      'header-lg': "theme(height.header-lg)",
      'container': "theme(container.padding)",
    },
    extend: {
      container: {
        padding: '20px',
        center: true,
      },
      colors: {
        //Base
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#223343',
          light: '#3B4559',
          'very-light': '#4E5B73',
          'lightest': '#CAD0DC',
        },
        //Abstract
        gray: {
          DEFAULT: '#F2F2F2',
          '2': '#E9EBEC',
        },

        yellow: '#FFBA00',
        blue: '#00B2CD',
      },
      fontFamily: {
        roboto: [
          'Roboto',
          'sans-serif',
        ],
        poppins: [
          'Poppins',
          'sans-serif',
        ],
      },
      fontSize: {
        'small': ['12px', { lineHeight: '18px'}],
      },
    }
  }
}
