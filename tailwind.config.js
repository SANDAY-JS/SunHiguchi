module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [/^opacity-/, /^m-/, /^p-/, /^right-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
      jp: "sans-serif",
      serif: 'serif'
    },
    fill: {
      svgColor: "#fff",
      mainP: "#dd7f8f",
    },
    rotate: {
      360: "360deg",
      405: "405deg",
      "-405": "-405deg",
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
