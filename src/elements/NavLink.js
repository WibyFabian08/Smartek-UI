import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ label, path, button, getNavlink }) => {
  if (button) {
    return (
      <Link
        to={path}
        className="mx-8 text-white bg-blue-500 hover:bg-blue-400 transition-all duration-200 px-6 py-2 rounded-full"
      >
        {label}
      </Link>
    );
  }
  return (
    <Link
      to={path}
      className={["mx-8 text-white hover:underline", getNavlink(path)].join(
        " "
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
