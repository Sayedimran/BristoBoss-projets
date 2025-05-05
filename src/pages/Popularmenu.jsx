import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { data } from "react-router-dom";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json)
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle heading={" Popular items "} subHeading={"FROM OUR MENU"} />
    </section>
  );
};

export default PopularMenu;
