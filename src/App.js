import { useEffect, useState } from "react";

function App() {

  const [solution, setSolution] = useState("");

  useEffect(function() {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/solutions");
        const data = await response.json();
        const index = Math.floor(Math.random() * data.length);
        setSolution(data[index].word);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <h1>{solution}</h1>}
    </div>
  );
}

export default App;