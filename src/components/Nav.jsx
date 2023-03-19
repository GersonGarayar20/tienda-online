import React from "react";
import { Link } from "react-router-dom";
import BtnCart from "./BtnCart";
import BtnLogin from "./BtnLogin";
import BtnHome from "./BtnHome";

export default function Nav() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <ul className="flex justify-between">
        <div className="flex items-center">
          <BtnHome />
        </div>
        <div className="flex items-center">
          <BtnLogin />
          <BtnCart />
        </div>
      </ul>
    </nav>
  );
}
