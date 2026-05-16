import { createContext, useContext, useState } from "react";
export const AgeContext = createContext();

function AgeContextProvider(props) {
  const [age, setAge] = useState(20);
  const addOneToAge = () => {
    setAge((prevAge) => prevAge + 1);
  };
  const addFiveToAge = () => {
    setAge((prevAge) => prevAge + 5);
  };
  const addNumToAge = (num) => {
    setAge((prevAge) => prevAge + num);
  };
  return (
    <AgeContext.Provider
      value={{ age, addOneToAge, addFiveToAge, addNumToAge }}
    >
      {props.children}
    </AgeContext.Provider>
  );
}
export default AgeContextProvider;
