import { useState } from "react";
import Home from "./component/Home";
import About from "./component/About";
function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <>
      <botton onClick={() => setIsHome(!isHome)}>toggle</botton>
      {isHome ? (
        <Home setIsHome={setIsHome} />
      ) : (
        <About setIsHome={setIsHome} />
      )}
    </>
  );
}

export default App;
