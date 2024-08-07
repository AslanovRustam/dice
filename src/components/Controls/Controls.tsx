"use client";
import React, { FC, useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Slider,
  Button,
} from "@mui/material";
import { marks } from "@/helpers/data";

interface ControlsProps {
  onPlay: (condition: string, threshold: number) => void;
  showAlert: boolean;
}

const Controls: FC<ControlsProps> = ({ onPlay, showAlert }) => {
  const [selectedCondition, setSelectedCondition] = useState<string>("under");
  const [threshold, setThreshold] = useState<number>(20);

  const handleConditionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedCondition(event.target.value);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setThreshold(newValue as number);
  };

  const handlePlayClick = () => {
    onPlay(selectedCondition, threshold);
  };

  return (
    <Box sx={{ width: 320, textAlign: "center" }}>
      <FormControl component="fieldset" sx={{ marginBottom: 4 }}>
        <RadioGroup
          row
          name="condition"
          value={selectedCondition}
          onChange={handleConditionChange}
          sx={{ justifyContent: "center", marginBottom: 2 }}
        >
          <FormControlLabel
            value="under"
            control={<Radio color="secondary" />}
            labelPlacement="start"
            label="Under"
          />
          <FormControlLabel
            value="over"
            control={<Radio color="secondary" />}
            labelPlacement="start"
            label="Over"
          />
        </RadioGroup>
      </FormControl>

      <Slider
        value={threshold}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        step={1}
        marks={marks}
        color="secondary"
        min={0}
        max={100}
        valueLabelDisplay="on"
      />

      <Button
        disabled={showAlert}
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handlePlayClick}
        sx={{ marginTop: 2 }}
      >
        Play
      </Button>
    </Box>
  );
};

export default Controls;
