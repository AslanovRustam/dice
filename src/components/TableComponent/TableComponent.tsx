import type { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IHistory } from "@/helpers/types";

interface TableComponentProps {
  history: IHistory[];
}

const TableComponent: FC<TableComponentProps> = ({ history }) => {
  return (
    <TableContainer sx={{ width: 600 }}>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="left">Guess</TableCell>
            <TableCell align="left">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map(({ time, guess, result, condition }) => {
            const resultColor =
              (guess > result && condition === "over") ||
              (guess < result && condition === "under")
                ? "#1b5e20"
                : "#c62828";
            return (
              <TableRow
                key={time}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{time}</TableCell>
                <TableCell align="left">{guess}</TableCell>
                <TableCell align="left" sx={{ color: resultColor }}>
                  {result}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
