import React, { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

const MyForm = () => {
  const usernameRef = React.useRef("");
  const passwordRef = React.useRef();
  const [merge, setMerge] = useState();

  const client = {
    method: "GET",
    url: "https://api.agify.io/",
    params: { name: { usernameRef } }
  };

  const handleSubmit = async () => {
    await axios
      .request(client)
      .then((response) => setMerge(response.data.age))
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <label>
        Username
        <input ref={usernameRef} />
      </label>
      <br />
      <label>
        Password
        <input ref={passwordRef} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>{merge}</p>
    </>
  );
};
export default MyForm;
