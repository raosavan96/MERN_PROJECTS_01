import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
     <Link to="/admin">
        <button className="w-full py-2 text-white bg-slate-950">
          Admin
        </button>
      </Link>
      <Link to="/productmange">
        <button className="w-full py-2 mt-2 text-white bg-slate-950">
          Product Mengements
        </button>
      </Link>
      <Link to="/userquery">
        <button className="w-full py-2 mt-2 text-white bg-slate-950">
          User Querys
        </button>
      </Link>
      <Link to="/usermange">
        <button className="w-full py-2 mt-2 text-white bg-slate-950">
          User Mengements
        </button>
      </Link>
    </>
  );
}

export default Sidebar;
