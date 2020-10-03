import { ReactElement } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/sections/Features";

export default function Home(): ReactElement {
  return <>
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