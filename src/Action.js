import { useState } from "react";

const Action = (props) => {
  let action = 2;
  const [myBets, updateMyBets] = useState([]);

  return (
    <div className="Action">
      <p className={`${action ? "text-green-400" : "text-red-700"}`}>
        Action: {action}
      </p>
      <div className="History">
        {
          // TODO this will be a list of past bets
        }
      </div>
    </div>
  );
};

export default Action;
