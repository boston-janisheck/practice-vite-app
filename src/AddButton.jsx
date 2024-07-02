import "./App.css";

const AddButton = ({ setNumber }) => {
  return (
    <button
      className="button"
      onClick={() => {
        // setNumber(number + 1);
        setNumber((prev) => prev + 1);
      }}
    >
      Click to Add
    </button>
  );
};

export default AddButton;
