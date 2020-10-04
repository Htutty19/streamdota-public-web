import { ReactElement } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/sections/Features";
import Head from 'next/head';
import HowDoesStreamdotaWork from "../components/sections/HowDoesStreamdotaWork";
import UsedByEvents from "../components/sections/UsedByEvents";
import UsedByStreamers from "../components/sections/UsedByStreamers";
import About from "../components/sections/About";

export default function Home(): ReactElement {
  return <>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="google" content="notranslate"/>
      <meta httpEquiv="Content-Language" content="de"/>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
    </Head>

    <HeroSection />
    <Features />
    <HowDoesStreamdotaWork />
    <UsedByEvents />
    <UsedByStreamers />
    <About />

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
        --secondary-accent: #e8772c;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>;
}