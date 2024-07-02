import { useEffect } from "react";
import "./App.css";

const Count = ({ number }) => {
  const Limit = () => number === null;

  useEffect(() => {
    document.title = `Counter: ${number}`;
  }, [number]);

  return (
    <>
      <span
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          margin: "1rem",
        }}
      >
        {number}
        {Limit() ? "Limit Reached!" : " "}
      </span>
    </>
  );
};

export default Count;
