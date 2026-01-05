import React from "react";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="container px-10  py-4 overflow-hidden mx-auto mt-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">
        404 |
        <span className="underline underline-offset-4 under font-light decoration-1 ml-4">
          Page Not Found
        </span>
      </h1>
      <p className="text-foreground max-w-80 text-center mb-8 mx-auto text-xl">
        Sorry, This page Could not be found
      </p>

      <NavLink
        // className=" block text-gray-500 max-w-80 text-center mb-8 mx-auto text-xl bg-blue-400 px-4 py-2 rounded-2xl "
        className="cosmic-button"
        to="/"
      >
        Go back to Home Page
      </NavLink>
    </div>
  );
};

export default NotFound;
