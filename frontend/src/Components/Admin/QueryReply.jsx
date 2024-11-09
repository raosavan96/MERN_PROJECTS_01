import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { MDBBtn, MDBCardBody, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";

function QueryReply() {
  const navig = useNavigate();
  const { rid } = useParams();
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("savanyadav377@gmail.com");
  const [sub, setSub] = useState("");
  const [reply, setReply] = useState("");
  //   const [action, setAction] = useState("");

  function handleQueryReply(e) {
    e.preventDefault();

    const replyedQuery = { to, sub, reply };

    fetch(`/api/replyedquery/${rid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(replyedQuery)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          navig("/userquery");
        }
      });
  }

  useEffect(() => {
    fetch(`/api/queryid/${rid}`)
      .then((res) => res.json())
      .then((res) => {
        setTo(res.email);
        setSub(res.sub);
        // setAction(res.status);
      });
  }, [rid]);
  return (
    <>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 h-screen bg-gray-900 py-5">
            <Sidebar />
          </div>
          <div className="col-span-8 p-3">
            <h1>QueryReply</h1>
            <div>
              <form className="max-w-96 mt-3" onSubmit={handleQueryReply}>
                <MDBCardBody>
                  <MDBInput
                    wrapperClass="mb-3 "
                    label="To"
                    size="md"
                    id="form1"
                    type="text"
                    value={to}
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                  <MDBInput
                    wrapperClass="mb-3 "
                    label="From"
                    size="md"
                    id="form1"
                    type="text"
                    value={from}
                    onChange={(e) => {
                      setFrom(e.target.value);
                    }}
                  />
                  <MDBInput
                    wrapperClass="mb-3 "
                    label="Sub"
                    size="md"
                    id="form1"
                    type="text"
                    value={sub}
                    onChange={(e) => {
                      setSub(e.target.value);
                    }}
                  />

                  <MDBTextArea
                    label="Mail-Body"
                    className="border"
                    rows={4}
                    value={reply}
                    onChange={(e) => {
                      setReply(e.target.value);
                    }}
                  />

                  {/* <label
                    className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                  >
                    Action(read, unread)
                  </label>

                  <select
                    onChange={(e) => {
                      setAction(e.target.value);
                    }}
                    className="w-full border py-2 px-2 mb-3 rounded-md"
                  >
                    <option>{action}</option>
                    <option value={"read"}>read</option>
                    <option value={"unread"}>unread</option>
                  </select> */}

                  <MDBBtn
                    className="mt-2 w-100 gradient-custom-4"
                    type="submit"
                    size="md"
                  >
                    Reply
                  </MDBBtn>
                </MDBCardBody>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QueryReply;
