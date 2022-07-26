/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ///흰색
      backGoround: "#FFFFFF",
      //빨간색 포인트
      mainColor: "#A61A30",
      //가격 버튼
      priceBtnColor: "#19CA92",
      //텍스트 컬러
      Beige: { 100: "#EAE0DA", 50: "#f7f3f0" },
      Black: { 100: "#1D1D1D", 80: "#ACB8C4", 50: "#DEDEDE" },
    },
    fontSize: {
      100: "40px",
      90: "32px",
      80: "28px",
      70: "20px",
      60: "16px",
      50: "14px",
      40: "12px",
    },
  },
  plugins: [require("daisyui")],
};
