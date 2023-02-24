import Head from 'next/dist/next-server/lib/head'
import React from 'react'
import StateProvider from '../provider/StateProvider'
import Layout from '../components/Layout'
import WorksNav from '../components/works/WorksNav'
import WorksTitle from '../components/works/WorksTitle'
import WorksList from '../components/works/WorksList'

const Works = () => {
  return (
    <StateProvider>
        <Head>
          <title>Works~制作実績~</title>
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

        <Layout>
          <WorksNav />
          <section>
            <WorksTitle />
            <WorksList />
          </section>
        </Layout>
      </StateProvider>
  )
}

export default Works