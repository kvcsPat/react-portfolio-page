import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="text">
        <h1 className="not-found-title">Ops!</h1>
        <p className="text-p2 not-found-text">
          Looks like you got lost. You can return to the page
        </p>
        <NavLink to="/" className="text-p2 redirect">
          here.
        </NavLink>
      </div>
    </section>
  );
}
