import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = (e) => {
    dispatch(logout());
  };

  return (
    <form className="logout">
      <h1 className='label leading-tight text-5xl mt-0 mb-2 text-gray-600 underline'>
        Welcome <span className="user__name">{user.name}</span>!
      </h1>
      <button className="logout__button btn1 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={(e) => logout(e)}>
        Log out
      </button>
    </form>
  );
};

export default Logout;
