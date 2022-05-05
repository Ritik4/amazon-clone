import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684228_.jpg"
        // src='https://m.media-amazon.com/images/I/61DhKa9NkLL._SX3000_.jpg'
        src="https://m.media-amazon.com/images/I/81JxNoPb96L._SX3000_.jpg"
        alt="banner"
      />

      <div className="home__row">
        <Product
          id="1230011"
          title="(Renewed) Fire-Boltt Supreme 1.79” Borderless LTPS 368*448 UHD PRO Display with 96% Screen to Body Ratio, 3ATM Waterproof , Spo2, Heart Rate and Blood Pressure Smart Watch  "
          price={150}
          rating={5}
          image="https://m.media-amazon.com/images/I/61RdLS1lGBL._AC_SY200_.jpg"
        />

        <Product
          id="1239812"
          title="the amazing camera for record youtuve tutorials"
          price={150}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1230068"
          title="pTron Studio Over-Ear Bluetooth 5.0 Wireless Headpho"
          price={150}
          rating={5}
          image="https://m.media-amazon.com/images/I/51yC6vz9TYL._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product
          id="1237768"
          title="pTron Studio Over-Ear Bluetooth 5.0 Wireless Headpho"
          price={350}
          rating={4}
          image="https://m.media-amazon.com/images/I/41XxlEGPvxL._AC_SY200_.jpg"
        />

        <Product
          id="1235559"
          title="the amazing camera for record youtuve tutorials"
          price={150}
          rating={5}
          image="https://m.media-amazon.com/images/S/onsitepublishing-media-prod/0d01fedd-b11e-4e02-b06e-7de72f6d2862/images/564b3ceb-8b48-4dc0-91ed-1d08b52e5a99._CR40,0,1200,720_SY200_TTD_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1212334"
          title="AmazonBasics 80cm (32 inch) HD Ready Smart LED Fire TV AB32E10SS (Black) (2020 Model)"
          price={10000}
          rating={4}
          image="https://m.media-amazon.com/images/I/71m0Nn4vqOL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
