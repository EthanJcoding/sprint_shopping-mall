/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Storybook의 Story 위치를 src 폴더로 정했으므로, 아래 규칙을 하나 더합니다.
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // 아래 링크에 대한 설명에 따라서, 미디어쿼리 규칙을 여기에도 설정합니다.
    extend: {
      margin: {
        '100px': '100px'
      },
      colors: {
        'main_color1': '#afbca1',
        'main_color2': '#99a988',
        'main_color3': '#93a481'
      }
    },
  },
  plugins: [],
}