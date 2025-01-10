import React from "react";
import Greet from "../Greet";

const PropExport = (prop: React.ComponentProps<typeof Greet>) => {
  return <div>{prop.msgCount}{prop.name}{(prop.auth).toString()}</div>;
};

export default PropExport;
