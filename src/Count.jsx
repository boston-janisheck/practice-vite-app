import { useEffect } from "react";
import "./App.css";

const Count = ({ number }) => {
  useEffect(() => {
    document.title = `Counter: ${number}`;
  }, [number]);

  return (
    <>
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          margin: "1rem",
        }}
      >
        {number}
      </div>
    </>
  );
};

export default Count;
