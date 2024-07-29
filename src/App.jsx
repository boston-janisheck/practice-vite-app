import Count from "./Count";
import AddButton from "./AddButton";
import ResetButton from "./ResetButton";
import NavBar from "./NavBar";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
    </>
  );
};

export default App;
