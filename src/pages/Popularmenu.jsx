import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MenuItem from "./Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  console.log(menu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle heading={" Popular items "} subHeading={"FROM OUR MENU"} />

      <div className="grid grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
