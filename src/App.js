import "./styles.css";
import AgeContextProvider from "./context/AgeContext";
import Age from "./components/Age/Age";

export default function App() {
  return (
    <div className="App">
      <AgeContextProvider>
        <Age />
      </AgeContextProvider>
    </div>
  );
}
