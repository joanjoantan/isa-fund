import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { currencySmybols, createData } from "../common/helpers";
import Popover from "@mui/material/Popover";

interface ISAAmountProps {
  remainingAllowance: number;
  initialAmount: number;
}

const rowsISASubscriptionHistory = [
  createData("2023-2024", "£20,000.00 ", "£19,000.00", "£1,000.00"),
  createData("2022-2023", "£20,000.00 ", "£15,000.00", "£5,000.00"),
  createData("2021-2022", "£20,000.00 ", "£8,000.00", "£12,000.00"),
  createData("2020-2021", "£20,000.00 ", "£4,000.00", "£16,000.00"),
];

const ISASubscriptionHistory: React.FC<ISAAmountProps> = ({
  remainingAllowance,
  initialAmount,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
  );
};

export default ISASubscriptionHistory;
