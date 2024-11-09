import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";

function Products() {
  const [userPro, setUserPro] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function queryHandle(e) {
    e.preventDefault();
    const userQuery = { email,  message };
    fetch(`/api/userQuerys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userQuery)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setEmail("");
        setMessage("");
      });
  }

  useEffect(() => {
    fetch(`/api/userproduct`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserPro(res);
      });
  }, []);

  return (
    <>
      <div className="container py-5 mb-5">
        <div className=" grid grid-cols-4 gap-4">
          {userPro.map((value, index) => (
            <div className="col-span-4  md:col-span-1" key={index}>
              <Cards value={value} />
            </div>
          ))}
        </div>

        <hr className="mb-5 mt-5" />

        <div className="max-w-96 mx-auto">
          <h2 className="mt-4 mb-3">Query</h2>
          <form onSubmit={queryHandle}>
            <MDBInput
              className="mb-3"
              label="Email input"
              id="typeEmail"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
           
            <MDBTextArea
              className="mb-3"
              label="Message"
              id="textAreaExample"
              rows="{4}"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button
              type="submit"
              className="py-2 px-5 rounded-md bg-slate-500 text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Products;
