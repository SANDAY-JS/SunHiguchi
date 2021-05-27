module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [/^opacity-/, /^m-/, /^p-/, /^right-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
      jp: "Kosugi Maru, sans-serif",
    },
    fill: {
      svgColor: "#fff",
      mainP: "#dd7f8f",
    },
    rotate: {
      360: "360deg",
    },
    colors: {
      mainP: "#dd7f8f",
      mainB: "#162447",
    },
    backgroundColor: {
      mainP: "#dd7f8f",
      mainB: "#162447",
    },
    borderColor: {
      mainP: "#dd7f8f",
      mainB: "#162447",
    },
    outlineColor: {
      mainP: "#dd7f8f",
      mainB: "#162447",
    },
    scrollBehavior: {
      immediately: "auto",
      smoothly: "smooth",
    },
    extend: {
      height: {
        line: "5px",
      },
      inset: {
        invisible: "110%",
        "-invisible": "-110%",
      },
      backgroundImage: (theme) => ({
        "web-person": "url('/images/web-development-person.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
