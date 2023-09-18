import { render, screen } from "@testing-library/react";

import Investment from "./Investment";

test("renders header title", () => {
  render(<Investment />);

  const title = screen.getByText(/Investment Form/i);
  expect(title).toBeInTheDocument();
});
