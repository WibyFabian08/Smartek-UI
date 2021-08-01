import React from "react";

import dot from "../../assets/icons/dotblue.svg";

const Motto = () => {
  return (
    <section
      style={{ height: 434 }}
      className="flex flex-col items-center justify-center px-5 md:px-0"
    >
      <p className="text-center">
        We help the industry optimize its business with{" "}
        <span style={{ color: "#1A237E" }}>effective and efficient</span> <br />{" "}
        <span style={{ color: "#1A237E" }}>technology solutions</span> to
        transform and digitize business processes
      </p>
      <img src={dot} alt="dot blue" className="mt-5" />
      <p className="font-semibold mt-5">Transform - Perform - Growth</p>
    </section>
  );
};

export default Motto;
