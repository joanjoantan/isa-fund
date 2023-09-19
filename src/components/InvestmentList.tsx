import React, { useState, useEffect } from "react";
import { currencySmybols } from "../common/helpers";
import ISASubscriptionHistory from "./ISASubscriptionHistory";

interface Investment {
  fund: string;
  amount: number;
}

interface InvestmentListProps {
  investments: Investment[];
}

const InvestmentList: React.FC<InvestmentListProps> = ({ investments }) => {
  const initialAmount = 25000;
  const [remainingAllowance, setRemainingAllowance] = useState(initialAmount);

  useEffect(() => {
    const totalInvestmentsAmount = investments.reduce(
      (sum, inv) => sum + Number(inv.amount),
      0
    );

    const newRemainingAllowance = initialAmount - totalInvestmentsAmount;

    setRemainingAllowance(newRemainingAllowance);
  }, [investments]);

  return (
    <>
      <h2>Fund Queried List</h2>

      <ISASubscriptionHistory
        remainingAllowance={remainingAllowance}
        initialAmount={initialAmount}
      />

      {investments.length === 0 ? (
        <p>
          <strong>No investment selected</strong>
        </p>
      ) : (
        <ul>
          {investments.map((investment, index) => (
            <li key={index}>
              Fund: {investment.fund}, Amount:{" "}
              {currencySmybols(investment.amount)}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default InvestmentList;
