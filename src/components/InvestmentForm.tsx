import React, { useState } from "react";
import FundSelection from "./FundSelection";
import InvestmentAmount from "./InvestmentAmount";
import { currencySmybols } from "../common/helpers";

import { InvestmentFormProps, Investment } from "../common/types";

const InvestmentForm = ({ onSubmit }: InvestmentFormProps): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const [totalInvestmentAmount, setTotalInvestmentAmount] = useState<number>(0);

  const [investment, setInvestment] = useState<Investment>({
    id: 1,
    fund: "",
    amount: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(investment);
    setStep(1);
    setInvestment({ id: 1, fund: "", amount: 0 });
  };

  const handleFundSelection = (fund: string) => {
    setInvestment({ ...investment, fund: fund });

    setStep(2);
  };

  const handleConfirmAmount = (amount: number) => {
    setInvestment({ ...investment, amount: amount });

    setStep(3);

    setTotalInvestmentAmount(totalInvestmentAmount + amount);
  };

  return (
    <>
      <h2>Investment Form</h2>

      {step === 1 && <FundSelection onSelectFund={handleFundSelection} />}

      {step === 2 && (
        <InvestmentAmount
          onConfirmAmount={handleConfirmAmount}
          previousInvestmentAmount={totalInvestmentAmount}
        />
      )}

      {step === 3 && (
        <div>
          <h3>Review Your Selection:</h3>
          <p>Fund: {investment.fund}</p>
          <p>Investment Amount: {currencySmybols(investment.amount)}</p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </>
  );
};

export default InvestmentForm;
