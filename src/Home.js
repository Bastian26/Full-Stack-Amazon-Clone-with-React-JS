import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/22dc1d38-ac1a-4ebd-ad4b-38caf3a96d3b._UR1280,600_.jpeg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id="12123234"
          title="The lean startup"
          price={29.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          }
          rating={5}
        />
        <Product
          id="123434232334"
          title="Kenwood KMix Stand Mixer Baking, Stylish Kicthen Mixer with K-beater"
          price={239.9}
          rating={4}
          image="https://m.media-amazon.com/images/I/31MMA-6ZWLL._AC_UF226,226_FMjpg_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12232343434"
          title="Hinsense Gorenje Hasugeräte"
          price={1349.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/31MMA-6ZWLL._AC_UF226,226_FMjpg_.jpg"
        />
        <Product
          id="1234455673434"
          title="Deebot t9 Saugroboter"
          price={233.2}
          rating={1}
          image="https://m.media-amazon.com/images/I/412ld3s6qgL._AC_UF226,226_FMjpg_.jpg"
        />
        <Product
          id="1234232323434"
          title="Anker 325W Powerbank, 2000mAH externer Akku PowerIO Technologie"
          price={55.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/41r43FCDE1L._AC_UF226,226_FMjpg_.jpg"
        />
      </div>
      <div className="home__row">
        {
          <Product
            id="123434"
            title="Samsung Galaxy s6"
            price={469.2}
            rating={2}
            image="https://m.media-amazon.com/images/I/41l4-pNBY3L._AC_UF226,226_FMjpg_.jpg"
          />
        }
      </div>
    </div>
  );
}

export default Home;
