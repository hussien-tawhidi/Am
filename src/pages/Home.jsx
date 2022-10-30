import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Title from "../components/header/Title";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Title />
      <Header />
      <div className="home-container">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
