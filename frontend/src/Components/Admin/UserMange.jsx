import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function UserMange() {
  const navig = useNavigate();
  const [users, setUsers] = useState([]);

  function handleUserStatus(uids) {
    fetch(`/api/handleUserStatus/${uids}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          navig("/usermange");
        }
      });
  }

  function usersDelete(duid) {
    fetch(`/api/userdelete/${duid}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  useEffect(() => {
    fetch(`/api/appusers`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, [users]);

  return (
    <>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 h-screen bg-gray-900 py-5">
            <Sidebar />
          </div>
          <div className="col-span-8 p-3">
            <h1>User Mangement</h1>
            {/* <p>{usersStatus}</p> */}
            <div>
              <MDBTable align="middle">
                <MDBTableHead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">Position</th>
                    <th scope="col">Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {users.map((value, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: "45px", height: "45px" }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">{value.user}</p>
                            <p className="text-muted mb-0">{value.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">Software engineer</p>
                        <p className="text-muted mb-0">IT department</p>
                      </td>
                      <td>
                        <MDBBadge
                          onClick={() => {
                            handleUserStatus(value._id);
                          }}
                          color={
                            value.userstatus === "Active" ? "success" : "danger"
                          }
                          pill
                        >
                          <button>{value.userstatus}</button>
                        </MDBBadge>
                      </td>
                      <td>Senior</td>
                      <td>
                        <MDBBtn
                          onClick={() => {
                            usersDelete(value._id);
                          }}
                          color="warning"
                          rounded
                          size="sm"
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

export default UserMange;
