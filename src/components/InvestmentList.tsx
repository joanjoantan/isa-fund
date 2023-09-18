import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { currencySmybols, createData } from "../common/helpers";
import Popover from "@mui/material/Popover";

interface Investment {
  fund: string;
  amount: number;
}

interface InvestmentListProps {
  investments: Investment[];
}

const rowsISASubscriptionHistory = [
  createData("2023-2024", "£20,000.00 ", "£19,000.00", "£1,000.00"),
  createData("2022-2023", "£20,000.00 ", "£15,000.00", "£5,000.00"),
  createData("2021-2022", "£20,000.00 ", "£8,000.00", "£12,000.00"),
  createData("2020-2021", "£20,000.00 ", "£4,000.00", "£16,000.00"),
];

const InvestmentList: React.FC<InvestmentListProps> = ({ investments }) => {
  const initialAmount = 25000;
  const [remainingAllowance, setRemainingAllowance] = useState(initialAmount);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  useEffect(() => {
    const totalInvestmentsAmount = investments.reduce(
      (sum, inv) => sum + Number(inv.amount),
      0
    );

    const newRemainingAllowance = initialAmount - totalInvestmentsAmount;

    setRemainingAllowance(newRemainingAllowance);
  }, [investments]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <h2>Fund Queried List</h2>
      <Typography variant="body1">
        Remaining Allowance {currencySmybols(remainingAllowance)} of{" "}
        {currencySmybols(initialAmount)}{" "}
        <small
          style={{ textDecoration: "underline dotted", cursor: "pointer" }}
          onClick={handleClick}
        >
          View ISA Subscription History
        </small>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            ISA Subscription History
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell>Limit </TableCell>
                  <TableCell align="right">Remaining</TableCell>
                  <TableCell align="right">Subscription</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsISASubscriptionHistory.map((row) => (
                  <TableRow
                    key={row.year}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.year}
                    </TableCell>
                    <TableCell>{row.limit}</TableCell>
                    <TableCell align="right">{row.remaining}</TableCell>
                    <TableCell align="right">{row.subscription}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Typography>
        </Popover>
      </Typography>

      {investments.length === 0 ? (
        <p>
          <strong>No investment selected</strong>
        </p>
      ) : (
        <ul>
          {investments.map((investment, index) => (
            <li key={index}>
              Fund: {investment.fund}, Amount:{" "}
              {currencySmybols(investment.amount)}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default InvestmentList;
