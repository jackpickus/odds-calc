import { useState } from "react";
import Action from "./Action";

const CHOICES = ["Wager", "Desired winnings"];

const WagerParams = () => {
  const [wager, updateWager] = useState("100");
  const [odds, updateOdds] = useState("-110");
  const [choice, updateChoices] = useState("");
  const [message, updateMessage] = useState("");
  const [potentialWinnings, updatePotentialWinnings] = useState(0);
  const [totalPayout, updateTotalPayout] = useState(0);
  const [bet, updateBet] = useState("");

  function calculateOdds(wager, odds, choice, e) {
    e.preventDefault();
    let amount = 0;
    if (odds > -100 && odds < 100) {
      updateMessage("ERROR odds must be greater than 100 or less than -100");
      return;
    }
    if (wager < 0.1) {
      updateMessage("ERROR wager must be 10 cents or more");
      return;
    }
    if (choice != "Wager" && choice != "Desired winnings") {
      updateMessage("ERROR no selection for wager was made");
      return;
    }

    if (odds >= 100) {
      //wager was on an underdog
      if (choice == "Wager") {
        amount = wager * (odds / 100);
      } else {
        amount = wager / (odds / 100);
      }
    } else {
      //wager was negative odds, favorite
      if (choice == "Wager") {
        amount = wager * (100 / (odds * -1));
      } else {
        amount = wager * ((-1 * odds) / 100);
      }
    }

    let roundedAmount = Math.round(amount * 100) / 100;
    updatePotentialWinnings(roundedAmount);

    let wagerToFloat = parseFloat(wager);
    let total = roundedAmount + wagerToFloat;
    let roundedTotal = Math.round(total * 100) / 100;
    updateTotalPayout(roundedTotal);
    updateMessage("");
    return roundedAmount;
  }

  return (
    <div className="wager-params">
      <div className="p-1 m-1">
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
      </div>
      <br />
      <div className="my-0 mx-auto w-11/12">
        <form>
          <label htmlFor="wager" className="mx-3 text-purple-600">
            {choice == "Desired winnings" ? (
              <span>Desired Winnings:</span>
            ) : (
              <span>Wager:</span>
            )}
            <input
              id="wager"
              value={wager}
              placeholder="Wager"
              onChange={(e) => updateWager(e.target.value)}
            />
          </label>
          <label htmlFor="odds">
            Odds:
            <input
              id="odds"
              value={odds}
              placeholder="Odds"
              onChange={(e) => updateOdds(e.target.value)}
            />
          </label>
          <button onClick={(e) => calculateOdds(wager, odds, choice, e)}>
            Submit
          </button>
        </form>
      </div>
      <div>
        {message != "" ? <p>{message}</p> : <p>Lets make some money!</p>}
      </div>
      <p>Potential Winnings: {potentialWinnings}</p>
      <p>Total Payout: {totalPayout}</p>
      <div>
        <label htmlFor="odds">
          The Bet:
          <input
            id="bet"
            value={bet}
            placeholder="e.g. Bulls -5"
            onChange={(e) => updateBet(e.target.value)}
          />
        </label>
        <button
          onClick={() =>
            console.log(
              `Your bet of ${wager} has been placed on ${bet} at ${odds}. Good luck!`
            )
          }
        >
          Place Wager
        </button>
      </div>
      <div>
        <Action
          bet={bet}
          odds={odds}
          pWinnings={potentialWinnings}
          wager={wager}
        />
      </div>
    </div>
  );
};

export default WagerParams;
