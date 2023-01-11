/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(41, 121, 242)',
        backdrop: 'rgb(27, 31, 40)',
        ongoing: 'rgb(249, 248, 113)',
        formButton: 'rgb(0, 155, 103)',
        completed: 'rgb(0, 193, 128)',
        completedHover: 'rgb(40, 244, 203)',
        items: 'rgb(37, 40, 50)',
        delete: 'rgb(237, 94, 104)',
        hover: 'rgb(144, 153, 166)',
        button: 'rgb(78, 83, 90)',
        text: 'rgb(233, 235, 235)',
      },
      fontFamily: {
        sans: ['Helvatica', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
