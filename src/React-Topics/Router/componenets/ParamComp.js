import React from "react";
import { useParams } from "react-router-dom";

function ParamComp() {
  const { id } = useParams(); //fetches id that was passed in url
  return <div>Params: {id}</div>;
}

export default ParamComp;
