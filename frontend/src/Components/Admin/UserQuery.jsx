import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function UserQuery() {
  const [userQuerys, setuserQuerys] = useState([]);

  function deleteQuery(id) {
    fetch(`/api/deletequery/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  useEffect(() => {
    fetch(`/api/querylist`)
      .then((res) => res.json())
      .then((res) => {
        setuserQuerys(res);
      });
  }, [userQuerys]);

  return (
    <>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 h-screen bg-gray-900 py-5">
            <Sidebar />
          </div>
          <div className="col-span-8 p-3">
            <h1>UserQuery</h1>
            <div>
              <MDBTable align="middle" className="mt-5">
                <MDBTableHead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Query</th>
                    <th scope="col">Action</th>
                    <th scope="col">Reply</th>
                    <th scope="col">Delete</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {userQuerys.map((value, index) => (
                    <tr key={index}>
                      <td>
                        <p className="fw-normal mb-1">{index + 1}</p>
                      </td>
                      <td>{value.email}</td>
                      <td>{value.message}</td>
                      <td>
                        <MDBBadge color="success" pill>
                          {value.status} 
                        </MDBBadge>
                      </td>
                      <td>
                        <Link to={`/replyquery/${value._id}`}>
                          <MDBBtn
                            style={{
                              color: "green",
                              backgroundColor: "transparent",
                              boxShadow: "none"
                            }}
                            rounded
                            size="sm"
                          >
                            reply
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
                            deleteQuery(value._id);
                          }}
                        >
                          Delete
                        </MDBBtn>
                      </td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserQuery;
