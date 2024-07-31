import { useEffect } from "react";
import "./App.css";

const Count = ({ number }) => {
  useEffect(() => {
    {
      number >= 5
        ? (document.title = "Limit Reached!")
        : (document.title = `Counter: ${number}`);
    }
    return () => {
      document.title = "Limit Reached!";
    };
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
