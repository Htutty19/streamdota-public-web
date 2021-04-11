import { ReactElement } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/sections/Features";
import Head from 'next/head';
import UsedByEvents from "../components/sections/UsedByEvents";
import UsedByStreamers from "../components/sections/UsedByStreamers";
import Team from "../components/sections/Team";
import AboutDetails from "../components/sections/AboutDetails";
import ForBusiness from "../components/sections/ForBusinesses";
import Footer from "../components/sections/Footer";

export default function Home(): ReactElement {
  return <>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="google" content="notranslate"/>
      <meta httpEquiv="Content-Language" content="de"/>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
      <title>streamdota.com - Home</title>

      <meta property="og:site_name" content="StreamDota - Your toolbox for streaming dota"/>
      <meta property="og:title" content={'Dota bot, overlays, stats & more'}/>
      <meta property="og:description" content={'Your toolbox for streaming dota2 | Dota Win Loss Overlay | Bet System | Roshan Timer | Live Stats of Picks & Bans | and much more...'}/>
      <meta property="og:image" content={'/shared/share.png'}/>
      <meta property="og:url" content="https://streamdota.com/"/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="description" content="Your toolbox for streaming dota2 | Dota Win Loss Overlay | Bet System | Roshan Timer | Live Stats of Picks & Bans | and much more..."/>

      <link rel="canonical" href="https://streamdota.com/" />
      <link rel="apple-touch-icon" sizes="180x180" href="/shared/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/shared/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/shared/favicon-16x16.png" />
      <link rel="manifest" href="/shared/site.webmanifest" />
      <link rel="mask-icon" href="/shared/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/shared/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/shared/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <HeroSection />
    <Features />
    <UsedByEvents />
    <ForBusiness />
    <UsedByStreamers />
    <AboutDetails />
    <Team />
    <Footer />

    <style jsx global>{`
      body, html {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 20px;
      }

      h1 {
        font-size: 3rem;
      }

      :root {
        --twitch: #772ce8;
        --primary-accent: #24d46a;
        --secondary-accent: #A34100;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>;
}
