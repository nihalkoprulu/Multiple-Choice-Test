import React, { FC, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
} from "@mui/material";

interface CheckboxGroupProps {
  options: string[];
  onAnswerSelect: (selected: string[]) => void;
}

const CheckboxGroupControl: FC<CheckboxGroupProps> = ({
  options,
  onAnswerSelect,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Check if the checkbox is checked or unchecked
    const newSelectedValues = event.target.checked
      ? [...selectedValues, value] // Add the value to the array if checked
      : selectedValues.filter((selected) => selected !== value); // Remove it if unchecked

    setSelectedValues(newSelectedValues);
    onAnswerSelect(newSelectedValues); // Callback to pass the selected values to the parent
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">You can choose multiple answers</FormLabel>
      <FormGroup>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={selectedValues.includes(option)} // Check if the value is selected
                onChange={handleChange}
                value={option}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxGroupControl;
