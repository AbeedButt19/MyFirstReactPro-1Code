import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json());
      if (response) {
        setName("");
        setEmail("");
        setMessage(JSON.stringify(response));
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">LogIn</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;
