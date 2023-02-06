import React from "react";

import "./filter.css";
import Card from "./card";
import Map from "../map/map";
import About from "../about/about";
import SwiperApp from "../swiper/swiper";
const Filter = () => {
  return (
    <div className="container">

      <main>
        <div className="row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </main>
        <Map />
        <br/>
        <About />
        <br />
        <SwiperApp />
        <br />
        <hr />
    </div>
  );
};

export default Filter;
