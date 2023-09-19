import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Investment } from "../common/types";

import InvestmentForm from "../components/InvestmentForm";
import InvestmentList from "../components/InvestmentList";

const InvestmentContext = React.createContext<{
  investments: Investment[];
  addInvestment: (investment: Investment) => void;
} | null>(null);

const Dashboards = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [investmentIdCounter, setInvestmentIdCounter] = useState(1);

  const addInvestment = (investment: Investment) => {
    const newInvestment = { ...investment, id: investmentIdCounter };
    setInvestmentIdCounter(investmentIdCounter + 1);
    setInvestments([...investments, newInvestment]);
  };

  const handleInvestmentSubmit = (investment: Investment) => {
    addInvestment(investment);
  };

  return (
    <InvestmentContext.Provider value={{ investments, addInvestment }}>
      <h2>Cushon ISA</h2>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InvestmentForm onSubmit={handleInvestmentSubmit} />
        </Grid>

        <Grid item xs={12}>
          <hr />
          <InvestmentList investments={investments} />
        </Grid>
      </Grid>
    </InvestmentContext.Provider>
  );
};

export default Dashboards;
