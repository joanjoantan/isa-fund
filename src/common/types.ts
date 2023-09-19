export interface FundSelectionProps {
    onSelectFund: (fund: string) => void;
}

export interface InvestmentAmountProps {
    onConfirmAmount: (amount: number) => void;
    previousInvestmentAmount: number;
}

export interface InvestmentFormProps {
    onSubmit: (investment: Investment) => void;
}
  
export interface Investment {
    id: number;
    fund: string;
    amount: number;
}
  
export interface InvestmentListProps {
    investments: Investment[];
}

export interface ISAAmountProps {
    remainingAllowance: number;
    initialAmount: number;
}
