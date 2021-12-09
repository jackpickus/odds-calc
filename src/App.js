import { render } from "react-dom";
import WagerParams from "./WagerParams";

const App = () => {
  return (
    <div>
      <h1>Odds Calculator</h1>
      <WagerParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
