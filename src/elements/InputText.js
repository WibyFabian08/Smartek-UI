import React from "react";

const InputText = ({ placeholder, name, textArea, small, medium, dark }) => {
  if (textArea && dark) {
    return (
      <div className="w-full px-2">
        <textarea
          name={name}
          className="px-4 py-2 focus:outline-none"
          style={{ backgroundColor: "#EFEFEF", width: '100%' }}
          rows="10"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
  if (small && dark) {
    return (
      <div className="w-full md:w-1/2 px-2 mb-4">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="px-3 py-2 w-full focus:outline-none "
          style={{ backgroundColor: "#EFEFEF" }}
        />
      </div>
    );
  }
  if (dark) {
    return (
      <div className="w-full px-2 mb-4">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="px-3 py-2 w-full focus:outline-none "
          style={{ backgroundColor: "#EFEFEF" }}
        />
      </div>
    );
  }
  if (medium) {
    return (
      <div className="w-full md:w-1/2 mb-4 px-2">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="px-3 py-2 w-full focus:outline-none"
          style={{ backgroundColor: "#fff" }}
        />
      </div>
    );
  }
  if (small) {
    return (
      <div className="w-full xl:w-48 mb-4 px-2">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="px-3 py-2 w-full focus:outline-none "
          style={{ backgroundColor: "#fff" }}
        />
      </div>
    );
  }
  if (textArea) {
    return (
      <div className="w-full px-2">
        <textarea
          name={name}
          className="px-4 py-2 focus:outline-none"
          rows="5"
          style={{width: '100%'}}
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
  return (
    <div className="w-full mb-4 px-2">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full px-3 py-2 focus:outline-none "
        style={{ backgroundColor: "#fff" }}
      />
    </div>
  );
};

export default InputText;
