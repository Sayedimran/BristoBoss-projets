import {
  FaBook,
  FaCalendar,
  FaClipboardList,
  FaHome,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { FaRectangleList } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiMenuSearchFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { AiFillContacts } from "react-icons/ai";
import { IoRestaurant } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: get is admin value form the database

  const [isAdmin] = useAdmin();
 

  // const isAdmin = true;
  return (
    <div className="flex gap-2">
      {/* Dashboard bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin? (
            <>
              <li>
                <NavLink to="/dashboard/AdminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <IoRestaurant /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaClipboardList /> Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> My Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdReviews /> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaRectangleList /> My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shard nav links */}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/salad">
              <RiMenuSearchFill /> Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/contact">
              <AiFillContacts /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
