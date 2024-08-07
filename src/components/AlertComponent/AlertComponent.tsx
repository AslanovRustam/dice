import type { FC } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface AlertComponentProps {
  message: string[];
}

const AlertComponent: FC<AlertComponentProps> = ({ message }) => {
  const isSuccess = message[0] === "You won";
  return (
    <Stack sx={{ width: 600, position: "absolute", top: "1em" }} spacing={2}>
      {isSuccess ? (
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckCircleOutlineIcon fontSize="inherit" />}
        >
          {message[0]}
        </Alert>
      ) : (
        <Alert variant="filled" severity="error">
          {message[0]}
          <br />
          {message[1]}
        </Alert>
      )}
    </Stack>
  );
};

export default AlertComponent;
