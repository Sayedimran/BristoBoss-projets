import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((erore) => console.log(errore.massage));
  };

  return (
    <div className="navbar fixed z-20 bg-black/50 text-white shadow-sm max-w-screen-xl">
      <div className="navbar-start">
        <h3 className=" text-xl">
          Bistro Boss <br />
          <span>Retruent</span>
        </h3>
      </div>
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className=" menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="menu"> Our Menu</Link>
          </li>

          <li>
            <Link to="order/salad"> Order </Link>
          </li>
          <li>
            <Link to="/secret">Secret</Link>
          </li>

          {user ? (
            <>
              <button onClick={handleLogOut} className="btn btn-ghost">
                {" "}
                LogOut
              </button>
            </>
          ) : (
            <>
              <li>
                <Link to="login"> Login </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
