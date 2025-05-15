import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./Popularmenu";
import Featured from "./Featured/Featured";
import Testymonials from "./Testymoials/Testymonials";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
              <title>Bistro Boss| Home</title></Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testymonials />
    </div>
  );
};

export default Home;
