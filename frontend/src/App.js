import React from "react";
import "./App.css";

function App() {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Application</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
