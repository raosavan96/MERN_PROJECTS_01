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

function Signup() {
  const navig = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();

  function handleSignup(e) {
    e.preventDefault();

    const signupData = { user, email, password, conPassword };

    if (password === conPassword && password.length === 4) {
      fetch("/api/signupdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData)
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message) {
            navig("/");
          }
        });
    } else {
      alert("Someting error");
    }
  }

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <form onSubmit={handleSignup}>
              <MDBCardBody className="py-5 px-4 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <div className="mb-3 w-full">
                  <MDBInput
                    label="User Name"
                    type="text"
                    size="lg"
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3 w-full">
                  <MDBInput
                    label="Email"
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
                    type="text"
                    size="lg"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3 w-full">
                  <MDBInput
                    label="Confirm Password"
                    type="text"
                    size="lg"
                    value={conPassword}
                    onChange={(e) => {
                      setConPassword(e.target.value);
                    }}
                  />
                </div>

                <p className="small mb-3 pb-lg-2">
                  <button className="text-white-50">Forgot password?</button>
                </p>
                <MDBBtn
                  type="submit"
                  outline
                  className="mx-2 px-5 mb-3"
                  color="white"
                  size="lg"
                >
                  Sign up
                </MDBBtn>

                <div>
                  <p className="mb-0">
                    I have an account?{" "}
                    <Link to="/">
                      <button className="text-white-50 fw-bold">Log in</button>
                    </Link>
                  </p>
                </div>
              </MDBCardBody>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
