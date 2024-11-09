import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { MDBBtn, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const { uid } = useParams();
  const navig = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [status, setStatus] = useState("0");

  function handleUpdateProducts(e) {
    e.preventDefault();

    const formDataPro = { title, description, price, status };

    fetch(`/api/updateditem/${uid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataPro)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          navig("/productmange");
        }
      });
  }

  useEffect(() => {
    fetch(`/api/updateproduct/${uid}`)
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.title);
        setDescription(res.description);
        setPrice(res.price);
        setStatus(res.status);
        console.log(res);
      });
  }, [uid]);

  return (
    <div>
      <div className="grid grid-cols-10">
        <div className="col-span-2 h-screen bg-gray-900 py-5">
          <Sidebar />
        </div>
        <div className="col-span-8 p-3">
          <h1>Update Product</h1>
          <div>
            <form className="max-w-96 mt-3" onSubmit={handleUpdateProducts}>
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
                  Stock
                </label>

                <select
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="w-full border py-2 px-2 rounded-md"
                >
                  <option>{status}</option>
                  <option value={"In-Stock"}>In-Stock</option>
                  <option value={"Out-Of-Stock"}>Out-Of-Stock</option>
                </select>

                <MDBBtn
                  className="mt-2 w-100 gradient-custom-4"
                  type="submit"
                  size="md"
                >
                  Update
                </MDBBtn>
              </MDBCardBody>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
