import type { FC } from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

interface WiningFrameProps {
  result: number | null;
}

const WiningFrame: FC<WiningFrameProps> = ({ result }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 320,
        height: 200,
        borderRadius: 4,
        background: "rgba(0, 0, 0, 0.04)",
      }}
    >
      <Typography variant="h1">{result && result}</Typography>
    </Paper>
  );
};

export default WiningFrame;
