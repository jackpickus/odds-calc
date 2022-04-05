import { render } from "react-dom";
import WagerParams from "./WagerParams";

const App = () => {
  return (
    <div className="p-0 m-0">
      {
        // ! Find out why styling is not working!
      }
      <h1 className="text-3xl font-bold underline">Odds Calculator</h1>
      <WagerParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
