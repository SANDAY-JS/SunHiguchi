
import React from "react";
import "../styles/globals.css";
import "../styles/loading-animation.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
