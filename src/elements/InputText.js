import React from "react";

const InputText = ({ placeholder, name, textArea, small, medium }) => {
  if (medium) {
    return (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="px-3 py-2 w-full md:w-1/2 mx-0 md:mx-2 focus:outline-none mb-4"
        style={{ backgroundColor: "#fff" }}
      />
    );
  }
  if (small) {
    return (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="px-3 py-2 w-full xl:w-48 focus:outline-none mb-4"
        style={{ backgroundColor: "#fff" }}
      />
    );
  }
  if (textArea) {
    return (
      <textarea
        name=""
        className="px-4 py-2 focus:outline-none"
        cols="55"
        rows="5"
        placeholder={placeholder}
      ></textarea>
    );
  }
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full px-3 py-2 focus:outline-none mb-4"
      style={{ backgroundColor: "#fff" }}
    />
  );
};

export default InputText;
