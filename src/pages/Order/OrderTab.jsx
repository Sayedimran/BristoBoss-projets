
import FoodCart from "../../components/FoodCard/FoodCart";

const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-1 justify-center gap-10 md:grid-cols-3 lg:grid-cols-3 ">
      {items.map((item) => (
        <FoodCart key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
