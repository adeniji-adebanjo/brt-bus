import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import NewsUpdates from "./Components/NewsUpdates";
import DownloadApp from "./Components/DownloadApp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <NewsUpdates />
      <DownloadApp />
    </>
  );
}

export default App;
