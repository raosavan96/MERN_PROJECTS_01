import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { MDBBtn, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const navig = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [proImg, setProImg] = useState(null);

  function handleAddProducts(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("img", proImg);

    fetch("/api/addproducts", {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          navig("/productmange");
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <div className="grid grid-cols-10">
        <div className="col-span-2 h-screen bg-gray-900 py-5">
          <Sidebar />
        </div>
        <div className="col-span-8 p-3">
          <h1>Add Products</h1>
          <div>
            <form
              className="max-w-96 mt-3"
              encType="multipart/form-data"
              onSubmit={handleAddProducts}
            >
              <MDBCardBody>
                <MDBInput
                  wrapperClass="mb-3"
                  label="Product Title"
                  size="md"
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Description"
                  size="md"
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Price"
                  size="md"
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  onChange={(e) => setProImg(e.target.files[0])}
                />

                <MDBBtn
                  className="mt-2 w-100 gradient-custom-4"
                  type="submit"
                  size="md"
                >
                  Add Product
                </MDBBtn>
              </MDBCardBody>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
