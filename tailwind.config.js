/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
    theme: {
  extend: {
    colors: {
      primary: '#000000',     // pure black
      secondary: '#1a1a1a',   // slightly lighter
      accent: '#ffffff',      // white for contrast
    },
    fontFamily: {
        sans: [
          '"Open Sans"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          '"Helvetica Neue"',
          '"Hiragino Sans GB"',
          '"WenQuanYi Micro Hei"',
          'Arial',
          'sans-serif',
        ],
      mono: ['"DM Mono"', 'monospace'],  }
  }
}
}
