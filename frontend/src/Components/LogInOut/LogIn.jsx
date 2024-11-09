import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const navig = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const logInData = { email, password };

    fetch("/api/logindata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logInData)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.message === "Successfully login...") {
          if (
            res.checkLogin &&
            res.checkLogin.email === "savanyadav377@gmail.com"
          ) {
            navig("/admin");
          } else if (res.message === "Contect Admin ...") {
            navig("/");
          } else {
            navig("/products");
          }
        }
      });
  }

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <form onSubmit={handleLogin}>
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="py-5 px-4 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Log in</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <div className="mb-3 w-full">
                  <MDBInput
                    label="Email address"
                    type="email"
                    size="lg"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3 w-full">
                  <MDBInput
                    label="Password"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <p className="small mb-3 pb-lg-2">
                  <button className="text-white-50">Forgot password?</button>
                </p>
                <MDBBtn
                  outline
                  className="mx-2 px-5 mb-3"
                  color="white"
                  size="lg"
                >
                  Log in
                </MDBBtn>

                <div>
                  <p className="mb-0">
                    Don't have an account?
                    <Link to="/signup">
                      <button className="text-white-50 fw-bold">Sign up</button>
                    </Link>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LogIn;
