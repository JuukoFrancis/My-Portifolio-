import React from "react";
import { Outlet } from "react-router";

export default function layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
