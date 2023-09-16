import React from "react";
import { ClipLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Loader = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <ClipLoader cssOverride={override} />;
    </div>
  );
};

export default Loader;
