import { render } from "@testing-library/react";

import InvestmentList from "./InvestmentList";

const mockInvestments = [
  { fund: "Fund A", amount: 5000 },
  { fund: "Fund B", amount: 7500 },
];

describe("InvestmentList Component", () => {
  it("should render with initial state", () => {
    const { getByText } = render(<InvestmentList investments={[]} />);

    // Check if the component renders with initial state when there are no investments
    expect(getByText("Fund Queried List")).toBeInTheDocument();
    expect(
      getByText("Remaining Allowance £25,000 of £25,000")
    ).toBeInTheDocument();
    expect(getByText("No investment selected")).toBeInTheDocument();
  });

  it("should display the list of investments", () => {
    const { getByText } = render(
      <InvestmentList investments={mockInvestments} />
    );

    // Check if the component displays the list of investments
    expect(getByText("Fund: Fund A, Amount: £5,000")).toBeInTheDocument();
    expect(getByText("Fund: Fund B, Amount: £7,500")).toBeInTheDocument();
  });

  it("should calculate remaining allowance based on investments", () => {
    const { getByText } = render(
      <InvestmentList investments={mockInvestments} />
    );

    // Check if the component calculates and displays the remaining allowance correctly
    expect(
      getByText("Remaining Allowance £12,500 of £25,000")
    ).toBeInTheDocument();
  });
});
