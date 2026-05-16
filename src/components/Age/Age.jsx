import { useContext } from "react";
import { AgeContext } from "../../context/AgeContext";
function Age() {
  const { age, addOneToAge, addFiveToAge, addNumToAge } =
    useContext(AgeContext);
  const num = 20;
  return (
    <>
      <div className="age">
        <h2>Age: {age} </h2>
        <button onClick={addOneToAge}>Add One to age</button>
        <button onClick={addFiveToAge}>Add One to age</button>
        <button onClick={() => addNumToAge(num)}>Add {num} to age</button>
      </div>
    </>
  );
}
export default Age;
