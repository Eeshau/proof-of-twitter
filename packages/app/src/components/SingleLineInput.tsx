import React from 'react';
import styled from "styled-components";
import { useTheme, TextField, Box, Typography } from "@mui/material";

interface SingleLineInputProps {
  label: string;
  value: any;
  onChange: (e: any) => void;
  highlighted?: boolean;
}

export const SingleLineInput: React.FC<SingleLineInputProps> = ({
  label,
  onChange,
  value,
  highlighted = false
}) => {
  
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <Typography 
        sx={{
          color: theme.palette.secondary.main,
        }}
      >
        {label}
      </Typography>
      <TextField
        value={value}
        onChange={onChange}
        placeholder={label}
        variant="outlined"
        fullWidth
        InputProps={{
          style: {
            color: theme.palette.secondary.main,
            background: "#F9F9F9",
            borderRadius: "10px",
            border: '1px solid #73767B'
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: highlighted ? theme.palette.accent.main : "rgba(255, 255, 255, 0.4)",
              borderWidth: highlighted ? '2px' : '1px',
            },
            "&:hover fieldset": {
              borderColor: highlighted ? theme.palette.accent.main : "#F9F9F9",
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.accent.main,
            },
            transition: "all 0.2s ease-in-out",
          },
        }}
      />
    </Box>
  );
};
