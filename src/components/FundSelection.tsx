import React, { useState } from "react";

interface FundSelectionProps {
  onSelectFund: (fund: string) => void;
}

const FundSelection: React.FC<FundSelectionProps> = ({ onSelectFund }) => {
  const [selectedFund, setSelectedFund] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFundSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFund(event.target.value);
    setErrorMessage("");
  };

  const handleSelectFund = () => {
    if (selectedFund.length > 0) {
      onSelectFund(selectedFund);
    } else {
      setErrorMessage("Please select a valid fund.");
    }
  };

  return (
    <>
      <label>Select a Fund: </label>

      <select
        data-testid="select-fund"
        onChange={handleFundSelection}
        value={selectedFund}
      >
        <option value="">Select a Fund</option>
        <option value="Cushon Equities Fund">Cushon Equities Fund</option>
        <option value="Cushon Pension Fund">Cushon Pension Fund</option>
        <option value="Cushon ISA Fund">Cushon ISA Fund</option>
      </select>

      <button data-testid="btn-next-fund" onClick={handleSelectFund}>
        Next
      </button>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </>
  );
};

export default FundSelection;