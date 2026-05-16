import { createContext, useContext, useReducer } from "react";
import { ageReducer } from "../reducers/AgeReducer/AgeReducer";
export const AgeContext = createContext();

function AgeContextProvider(props) {
  const [age, dispatch] = useReducer(ageReducer, 0);

  return (
    <AgeContext.Provider value={{ age, dispatch }}>
      {props.children}
    </AgeContext.Provider>
  );
}
export default AgeContextProvider;
