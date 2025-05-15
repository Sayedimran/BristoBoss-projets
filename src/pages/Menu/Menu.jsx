import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../PopularMenu";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");

  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss| Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" />
      <SectionTitle subHeading={"Don't Miss"} heading={"TODAYS OFFER"} />
      {/* dessert menu items */}

      <MenuCategory items={salad} title={"salad"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={pizzaImg}></MenuCategory>
      <MenuCategory
        img={dessertImg}
        items={dessert}
        title={"desert"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
