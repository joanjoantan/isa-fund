import { render, fireEvent } from "@testing-library/react";

import InvestmentAmount from "./InvestmentAmount";

describe("InvestmentAmount Component", () => {
  it("should render with initial state", () => {
    const { getByPlaceholderText, getByText } = render(
      <InvestmentAmount
        onConfirmAmount={() => {}}
        previousInvestmentAmount={0}
      />
    );
    const inputElement = getByPlaceholderText("Enter the investment amount");
    const buttonElement = getByText("Confirm");

    // Check if the component renders with initial state
    expect(inputElement).toHaveValue(0);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should update the amount when input value changes", () => {
    const { getByPlaceholderText } = render(
      <InvestmentAmount
        onConfirmAmount={() => {}}
        previousInvestmentAmount={0}
      />
    );
    const inputElement = getByPlaceholderText("Enter the investment amount");

    // Simulate changing the input value
    fireEvent.change(inputElement, { target: { value: "1000" } });

    // Check if the input value is updated
    expect(inputElement).toHaveValue(1000);
  });

  it('should display an error message if the amount is 0 and "Confirm" is clicked', () => {
    const { getByText } = render(
      <InvestmentAmount
        onConfirmAmount={() => {}}
        previousInvestmentAmount={0}
      />
    );
    const buttonElement = getByText("Confirm");

    // Click "Confirm" with amount as 0
    fireEvent.click(buttonElement);

    // Check if the error message is displayed
    expect(getByText("Please enter an amount.")).toBeInTheDocument();
  });

  it("should display an error message if the total amount exceeds £25,000", () => {
    const { getByPlaceholderText, getByText } = render(
      <InvestmentAmount
        onConfirmAmount={() => {}}
        previousInvestmentAmount={24000}
      />
    );
    const inputElement = getByPlaceholderText("Enter the investment amount");
    const buttonElement = getByText("Confirm");

    // Simulate changing the input value to exceed the limit
    fireEvent.change(inputElement, { target: { value: "2000" } });

    // Click "Confirm" with total amount exceeding the limit
    fireEvent.click(buttonElement);

    // Check if the error message is displayed
    expect(
      getByText("Total investment amount cannot exceed £25,000.")
    ).toBeInTheDocument();
  });

  it('should call onConfirmAmount with the entered amount when "Confirm" is clicked', () => {
    const onConfirmAmountMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <InvestmentAmount
        onConfirmAmount={onConfirmAmountMock}
        previousInvestmentAmount={0}
      />
    );
    const inputElement = getByPlaceholderText("Enter the investment amount");
    const buttonElement = getByText("Confirm");

    // Simulate changing the input value
    fireEvent.change(inputElement, { target: { value: "1500" } });

    // Click "Confirm" with a valid amount
    fireEvent.click(buttonElement);

    // Check if onConfirmAmount is called with the entered amount
    expect(onConfirmAmountMock).toHaveBeenCalledWith(1500);
  });
});
