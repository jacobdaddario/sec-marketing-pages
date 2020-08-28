module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        '2xl': '1920px',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '124': '31rem',
        '140': '35rem',
      },
      colors: {
        maroon: {
          '100': "#f0a0a0",
          '200': "#dc8c8c",
          '300': "#c87878",
          '400': "#b46464",
          '500': "#a05050",
          '600': "#8c3c3c",
          '700': "#782828",
          '800': "#641414",
          '900': "#500000",
        },
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
