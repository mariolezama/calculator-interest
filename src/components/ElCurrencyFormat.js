import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  // Example of custom styling
  "& .MuiInputBase-root": {
    fontSize: "1.2rem", // Equivalent to is-medium (adjust as needed)
  },
}));

const ElCurrencyFormat = ({ value, onChange }) => {
  const [isInputActive, setIsInputActive] = useState(false);

  const handleBlur = () => setIsInputActive(false);
  const handleFocus = () => setIsInputActive(true);

  const displayValue = isInputActive
    ? value.toString()
    : value.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");

  const handleChange = (e) => {
    let modifiedValue = e.target.value;
    let newValue = parseFloat(modifiedValue.replace(/[^\d.]/g, ""));
    if (isNaN(newValue)) newValue = "";
    onChange(newValue);
  };

  return (
    <StyledTextField // Use StyledTextField if you need custom styles
      value={displayValue}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <i className="fa fa-dollar" style={{ fontSize: "100%" }} />{" "}
            {/* Or use a Material Icon */}
          </InputAdornment>
        ),
      }}
      fullWidth // If you want the input to take full width
      margin="dense" // Or other margin options
    />
  );
};

export default ElCurrencyFormat;
