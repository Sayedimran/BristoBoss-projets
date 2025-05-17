
import MenuItem from "../../Shared/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items ,title , img}) => {
  return (
    <div>
      <Cover img={img} title={title} />
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline rounded-lg border-0 border-b-4">
          {" "}
          Order Now{" "}
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
