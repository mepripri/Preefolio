import React from "react";
import "./Home.css";
import Highlights from "../../components/Highlights/Highlights";
import Header from "../../components/Header/Header";
import Instabar from "../../components/Instabar/Instabar";

function Home() {
  return (
    <div className="home">
      <Header />
      <Highlights />
      <Instabar />
    </div>
  );
}

export default Home;
