"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import WiningFrame from "../../components/WiningFrame/WiningFrame";
import Controls from "../../components/Controls/Controls";
import TableComponent from "../../components/TableComponent/TableComponent";
import AlertComponent from "../AlertComponent/AlertComponent";
import { IHistory } from "@/helpers/types";

export default function HomePageComponent() {
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<IHistory[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string[]>(["", ""]);

  const handlePlay = (condition: string, threshold: number) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const currentTime = new Date().toLocaleTimeString([], {
      hour12: false,
    });

    const gameResult = {
      time: currentTime,
      guess: threshold,
      result: randomNumber,
      condition: condition,
    };

    setResult(randomNumber);
    console.log(gameResult);
    setHistory((prevHistory) => {
      const updatedHistory = [gameResult, ...prevHistory];
      if (updatedHistory.length > 10) {
        updatedHistory.pop();
      }
      return updatedHistory;
    });

    let alertMsg = ["", ""];
    if (
      (condition === "over" && randomNumber < threshold) ||
      (condition === "under" && randomNumber > threshold)
    ) {
      alertMsg = ["You won", ""];
    } else if (condition === "over" && randomNumber > threshold) {
      alertMsg = ["You lost", "Number was lower"];
    } else if (condition === "under" && randomNumber < threshold) {
      alertMsg = ["You lost", "Number was higher"];
    }
    setAlertMessage(alertMsg);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 14,
      }}
    >
      {showAlert && <AlertComponent message={alertMessage} />}
      <WiningFrame result={result} />
      <Controls onPlay={handlePlay} showAlert={showAlert} />
      {history.length > 0 ? (
        <TableComponent history={history} />
      ) : (
        <Typography variant="subtitle1" component="p">
          Let`s play
        </Typography>
      )}
    </Box>
  );
}
