import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

export default function ProductList() {
  const navig = useNavigate();

  const [products, setProducts] = useState([]);

  function deleteProduct(id) {
    fetch(`/api/deleteproduct/${id}`, {
      method: "DELETE"
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
    fetch("/api/adminproduct")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, [products]);

  return (
    <MDBTable align="middle" className="mt-5">
      <MDBTableHead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {products.map((value, index) => (
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={`/uploads/${value.proImg}`}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{value.title}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">{value.description}</p>
            </td>

            <td>{value.price}</td>
            <td>
              <MDBBadge color="success" pill>
                {value.status}
              </MDBBadge>
            </td>
            <td>
              <Link to={`/updateproduct/${value._id}`}>
                <MDBBtn
                  style={{
                    color: "green",
                    backgroundColor: "transparent",
                    boxShadow: "none"
                  }}
                  rounded
                  size="sm"
                >
                  Update
                </MDBBtn>
              </Link>
            </td>
            <td>
              <MDBBtn
                style={{
                  color: "red",
                  backgroundColor: "transparent",
                  boxShadow: "none"
                }}
                rounded
                size="sm"
                onClick={() => {
                  deleteProduct(value._id);
                }}
              >
                Delete
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
