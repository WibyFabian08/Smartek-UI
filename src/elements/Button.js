import React from "react";

const Button = ({ label, submit, download, badge }) => {
  if (badge) {
    return (
      <button
        className="px-6 py-2 rounded-full"
        style={{ color: "#2EA0DE", backgroundColor: "#D3EBF8" }}
      >
        {label}
      </button>
    );
  }
  if (download) {
    return (
      <button
        type="submit"
        className="text-white px-6 py-2 transition-all duration-200"
        style={{ backgroundColor: "#56CCF2" }}
      >
        {label}
      </button>
    );
  }
  if (submit) {
    return (
      <button
        type="submit"
        className="text-white px-6 py-2 transition-all duration-200"
        style={{ backgroundColor: "#1A237E" }}
      >
        {label}
      </button>
    );
  }
  return (
    <button
      className="bg-white px-6 py-2 hover:bg-gray-200 transition-all duration-200"
      style={{ color: "#1A237E" }}
    >
      {label}
    </button>
  );
};

export default Button;
