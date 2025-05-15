import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-2 items-center mx-3">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[100px]  border-2"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
