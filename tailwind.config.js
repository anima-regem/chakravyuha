/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#32B757",
        //color1: "#FF4F5A",
        //color2: "#FA9C0F", 
        color2: "#FFFFFF",
        color3: "#152F37",
        //color3: "#32B757",
        //color4: "#35528B",
        color4: "#32B757",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
