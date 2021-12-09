import { useState } from "react";

const CHOICES = ["Wager", "Desired winnings"];

const WagerParams = () => {

  const [wager, updateWager] = useState("100");
  const [odds, updateOdds] = useState("-110")
  const [choice, updateChoices] = useState("");

  return (
    <div className="wager-params">
      <label htmlFor="choices">
        Choose either wager or desired winnings
        <select
          id="choices"
          value={choice}
          onChange={(e) => updateChoices(e.target.value)}
          onBlur={(e) => updateChoices(e.target.value)}
        >
          <option />
          {CHOICES.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      </label>
      <br />
      <form>
        <label htmlFor="wager">
          Wager:
          <input
            id="wager"
            value={wager}
            placeholder="Wager"
            onChange={(e) => updateWager(e.targetValue)}
          />
        </label>
        <label htmlFor="odds">
            Odds:
            <input
            id="odds"
            value={odds}
            placeholder="Odds"
            onChange={(e) => updateOdds(e.targetValue)}
            />
            </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default WagerParams;
