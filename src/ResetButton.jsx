import "./App.css";

const ResetButton = ({ setNumber }) => {
  return (
    <button className="button" onClick={() => setNumber(0)}>
      Reset
    </button>
  );
};

export default ResetButton;
