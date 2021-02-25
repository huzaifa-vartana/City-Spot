import React from "react";
import { useAuth } from "../AuthContext";
export const Navbar = () => {
  // const { currentUser } = useAuth();

  return (
    <nav className="navbar-simple">
      <h1></h1>
      <ul>
        <li>
          <div className="btn-shape">
            <a href="/developers">Developers</a>
          </div>
        </li>

        <li>
          <div className="btn-shape">
            <a href="/login">User OnBoarding</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
