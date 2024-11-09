import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

function ProductMange() {
  return (
    <>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 h-screen bg-gray-900 py-5">
            <Sidebar />
          </div>
          <div className="col-span-8 p-3">
            <h1>ProductMange</h1>

            <div>
              <Link to={"/addproducts"}>
                <button className="bg-lime-500 text-white px-3 py-1 rounded-md hover:bg-slate-600 active:bg-yellow-200">
                  Add Products
                </button>
              </Link>
            </div>

            <div>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductMange;
