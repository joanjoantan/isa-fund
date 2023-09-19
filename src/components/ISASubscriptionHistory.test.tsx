import { render } from "@testing-library/react";

import ISASubscriptionHistory from "./ISASubscriptionHistory";
import { currencySmybols } from "../common/helpers";

const mockRemainingAllowance = 10000;
const mockInitialAmount = 25000;

describe("ISASubscriptionHistory Component", () => {
  it("should render with initial state", () => {
    const { getByText } = render(
      <ISASubscriptionHistory
        remainingAllowance={mockRemainingAllowance}
        initialAmount={mockInitialAmount}
      />
    );

    // Check if the component renders with initial state
    expect(
      getByText(
        `Remaining Allowance ${currencySmybols(
          mockRemainingAllowance
        )} of ${currencySmybols(mockInitialAmount)}`
      )
    ).toBeInTheDocument();
  });
});
