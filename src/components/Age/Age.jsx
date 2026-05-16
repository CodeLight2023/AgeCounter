import { useContext } from "react";
import { AgeContext } from "../../context/AgeContext";
function Age() {
  const { age, dispatch } = useContext(AgeContext);
  const num = 20;
  return (
    <>
      <div className="age">
        <h2>Age: {age} </h2>
        <button onClick={() => dispatch({ type: "ADD_ONE_TO_AGE" })}>
          Add One to age
        </button>
        <button onClick={() => dispatch({ type: "ADD_FIVE_TO_AGE" })}>
          Add Five to age
        </button>
        <button onClick={() => dispatch({ type: "ADD_NUM_TO_AGE", num: num })}>
          Add {num} to age
        </button>
      </div>
    </>
  );
}
export default Age;
