import React from "react";
import {
  Link
} from "react-router-dom";

export const Header = () => {
  return (<>
    <header className="">
      <div className="">
        <a className="">
          <span className="">ヘッダー</span>
        </a>
        <nav className="">
          <Link to="/" className="">Home</Link>
          <Link to="/login" className="">Login</Link>
        </nav>
      </div>
    </header>
  </>);
};
