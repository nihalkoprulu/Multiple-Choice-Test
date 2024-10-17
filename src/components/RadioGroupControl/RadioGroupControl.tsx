import React, { FC, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

interface RadioBoxProps {
  options: string[];
  onAnswerSelect: (selected: string) => void;
}

const RadioGroupControl: FC<RadioBoxProps> = ({ options, onAnswerSelect }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onAnswerSelect(value); // Callback to pass the selected value to the parent
  };
  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedValue} onChange={handleChange}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupControl;
