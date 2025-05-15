import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MenuItem from "./Shared/MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle heading={" Popular items "} subHeading={"FROM OUR MENU"} />

      <div className="grid grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
