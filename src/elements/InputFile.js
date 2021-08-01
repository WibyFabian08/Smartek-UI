import React, { useRef } from "react";

const InputFile = ({ name, placeholder }) => {
  const inputRef = useRef(null);
  return (
    <div className="w-full mb-4 px-2">
      <input
        name={name}
        type="file"
        className="px-4 py-2 focus:outline-none w-full hidden"
        ref={inputRef}
      ></input>
      <input
        readOnly
        className="px-4 py-2 focus:outline-none w-full"
        placeholder={placeholder}
        style={{ backgroundColor: "#EFEFEF", cursor: "pointer" }}
        onClick={() => inputRef.current.click()}
      />
    </div>
  );
};

export default InputFile;
