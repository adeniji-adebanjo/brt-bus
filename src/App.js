import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import NewsUpdates from "./Components/NewsUpdates";
import DownloadApp from "./Components/DownloadApp";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <NewsUpdates />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default App;
