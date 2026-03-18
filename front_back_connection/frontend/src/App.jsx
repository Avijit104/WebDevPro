import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
        console.log(jokes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setJokes]);

  return (
    <>
      <h1>Todays Jokes</h1>
      <p>length: {jokes.length} </p>
      <div>{typeof jokes}</div>
      {jokes.map((item) => (
        <div key={item.id}>
          <h3> {item.title} </h3>
          <p> {item.content} </p>
        </div>
      ))}
    </>
  );
}

export default App;
