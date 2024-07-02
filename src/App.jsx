import Count from "./Count";
import AddButton from "./AddButton";
import { useState } from "react";
import "./App.css";
import ResetButton from "./ResetButton";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Counter</h1>
      {number < 5 ? (
        <>
          <Count number={number} setNumber={setNumber} />
          <AddButton setNumber={setNumber} />
        </>
      ) : (
        <h2>Limit Reached!</h2>
      )}
      <ResetButton setNumber={setNumber} />
    </div>
  );
};

export default App;
