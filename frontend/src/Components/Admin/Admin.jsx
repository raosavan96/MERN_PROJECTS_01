import React from "react";
import Sidebar from "./Sidebar";

function Admin() {
  return (
    <>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 h-screen bg-gray-900 py-5">
            <Sidebar />
          </div>
          <div className="col-span-8 p-3">
            <h1>Admin</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
