import React, { useState } from "react";

interface InvestmentAmountProps {
  onConfirmAmount: (amount: number) => void;
  previousInvestmentAmount: number;
}

const InvestmentAmount: React.FC<InvestmentAmountProps> = ({
  onConfirmAmount,
  previousInvestmentAmount,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: number = Number(event.target.value);

    // Ensure the value is a number and within the max limit (25000)
    if (!isNaN(newValue) && newValue <= 25000) {
      setAmount(newValue);
      setErrorMessage("");
    }
  };

  const handleConfirmClick = () => {
    if (amount === 0) {
      setErrorMessage("Please enter an amount.");
    } else {
      const totalAmount = previousInvestmentAmount + amount;

      if (Number(totalAmount) > 25000) {
        setErrorMessage("Total investment amount cannot exceed £25,000.");
      } else {
        onConfirmAmount(amount);
        setAmount(0);
        setErrorMessage("");
      }
    }
  };

  return (
    <>
      <label>Amount added to Cushon ISA and invested in fund (£):</label>

      <input
        type="number"
        min="0"
        max="25000"
        placeholder="Enter the investment amount"
        value={amount}
        onChange={handleAmountChange}
      />

      <button onClick={handleConfirmClick}>Confirm</button>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </>
  );
};

export default InvestmentAmount;
