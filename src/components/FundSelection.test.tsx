import { render, fireEvent } from "@testing-library/react";

import FundSelection from "./FundSelection";

describe("FundSelection Component", () => {
  it("should render with initial state", () => {
    const { getByTestId } = render(<FundSelection onSelectFund={() => {}} />);
    const selectElement = getByTestId("select-fund");
    const buttonElement = getByTestId("btn-next-fund");

    // Check if the component renders with initial state
    expect(selectElement).toHaveValue("");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should select a fund", () => {
    const onSelectFundMock = jest.fn();
    const { getByTestId } = render(
      <FundSelection onSelectFund={onSelectFundMock} />
    );
    const selectElement = getByTestId("select-fund");

    // Simulate selecting a fund
    fireEvent.change(selectElement, {
      target: { value: "Cushon Equities Fund" },
    });

    // Check if the selected value is updated
    expect(selectElement).toHaveValue("Cushon Equities Fund");
  });

  it('should show an error message if "Next" is clicked without selecting a fund', () => {
    const onSelectFundMock = jest.fn();
    const { getByTestId, getByText } = render(
      <FundSelection onSelectFund={onSelectFundMock} />
    );
    const buttonElement = getByTestId("btn-next-fund");

    // Click "Next" without selecting a fund
    fireEvent.click(buttonElement);

    // Check if the error message is displayed
    expect(getByText("Please select a valid fund.")).toBeInTheDocument();
  });

  it('should call onSelectFund when "Next" is clicked after selecting a fund', () => {
    const onSelectFundMock = jest.fn();
    const { getByTestId } = render(
      <FundSelection onSelectFund={onSelectFundMock} />
    );
    const selectElement = getByTestId("select-fund");
    const buttonElement = getByTestId("btn-next-fund");

    // Simulate selecting a fund
    fireEvent.change(selectElement, {
      target: { value: "Cushon Equities Fund" },
    });

    // Click "Next" after selecting a fund
    fireEvent.click(buttonElement);

    // Check if onSelectFund is called with the selected fund
    expect(onSelectFundMock).toHaveBeenCalledWith("Cushon Equities Fund");
  });
});
