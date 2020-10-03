import { ReactElement } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/sections/Features";
import Head from 'next/head';

export default function Home(): ReactElement {
  return <>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="google" content="notranslate"/>
      <meta http-equiv="Content-Language" content="de"/>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
    </Head>
    <HeroSection />
    <Features />


    <br />
    <br />
    <br />
    <br />
    <br />

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