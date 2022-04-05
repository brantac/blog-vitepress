module.exports = {
  content: ["./docs/.vitepress/theme/**/*.vue"],
  theme: {
    extend: {
      spacing: {
        /**
         * cs: custom space
         * The scale was calculated using the golden ratio (1.618)
        */
        'cs-0': '2.62px',
        'cs-1': '4.24px',
        'cs-2': '6.87px',
        'cs-3': '11.12px',
        'cs-4': '18px',   // This is the base scale
        'cs-5': '29px',
        'cs-6': '47px',
        'cs-7': '76px',
        'cs-8': '123px',
        'cs-9': '199px',
        'cs-10': '322px',
        'cs-11': '522px',
        'cs-12': '845px',
        'cs-13': '1367px',
        'cs-14': '2213px',
      }
    },
  },
  plugins: [],
}
