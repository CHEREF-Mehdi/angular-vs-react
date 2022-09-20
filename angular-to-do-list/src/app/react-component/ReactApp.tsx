import * as React from "react";
import { ContainerFC } from "./components/Container";

export const ReactApp: React.FC = () => {
  return (
    <div>
      <h1>React Component running inside Angular application</h1>
      <ContainerFC />
    </div>
  );
};
