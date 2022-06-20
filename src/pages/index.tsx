import React from "react";
import Head from "next/head";
import About from "../components/About";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Voice from "../components/Voice";
import Payment from "../components/Payment";
import Contact from "../components/Contact";
import TopDesign from "../components/TopDesign";
import Layout from "../components/Layout";
import StateProvider from "../provider/StateProvider";
import LoadingAnim from "../assets/LoadingAnim";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <>
      <StateProvider>
        <Head>
          <title>Sun Higuchi ~Web制作・開発~</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <meta name="description" content="Sun Higuchi's WebSite" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href="./images/source-code-icon-64-213242.png"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/claymorphism-css/dist/clay.css"
          />
        </Head>

        <LoadingAnim />
        <TopDesign />
        <Layout>
          <Nav />
          <Introduction />
          <About />
          <Projects />
          <Voice />
          <Services />
          <Payment />
        </Layout>
        <Contact />
      </StateProvider>
    </>
  );
}
