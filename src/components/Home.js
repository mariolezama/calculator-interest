import React, { useState } from "react";
import CompoundInterest from "./compound-interest/CompoundInterestChart";
import "../css/main.css";
import "../css/Home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Paper } from "@mui/material";
import FaqSection from "./compound-interest/FaqSection";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Container } from "@mui/material";

const CompoundInterestView = () => {
  const [inputs, setInputs] = useState({
    principal: null,
    rate: 7,
    compound: 1,
    time: 10,
    pmt: 0,
  });

  const options = [
    { value: 1, text: "Anualmente" },
    { value: 12, text: "Mensualmente" },
    { value: 24, text: "Quincenalmente" },
    { value: 52, text: "Semanalmente" },
    { value: 365, text: "Diariamente" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ p: 8 }}>
      <Box sx={{ p: 3 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom align="center">
            CALCULADORA DE INTERÉS COMPUESTO
          </Typography>
        </Container>
      </Box>
      <Paper elevation={2}>
        <Grid container>
          <Grid size={4}>
            <Box sx={{ p: 2 }}>
              {/* Reusable Tooltip Component */}
              {({ title, content }) => (
                <Tooltip
                  title={
                    <React.Fragment>
                      {content.split("<br />").map((line, index) => (
                        <Typography key={index} variant="body2">
                          {line}
                        </Typography>
                      ))}
                    </React.Fragment>
                  }
                >
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              )}

              <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Tooltip title="Cantidad con la que vas a comenzar a invertir.">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Depósito inicial
                    </InputLabel>
                  </Tooltip>
                  <OutlinedInput
                    type="number"
                    name="principal"
                    value={inputs.principal}
                    onChange={handleInputChange}
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Depósito inicial"
                  />
                </FormControl>
              </div>

              <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Tooltip title="Tasa de rendimiento anual que recibes expresada en porcentaje.">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Tasa de interés anual
                    </InputLabel>
                  </Tooltip>
                  <OutlinedInput
                    type="number"
                    name="rate"
                    value={inputs.rate}
                    onChange={handleInputChange}
                    id="outlined-adornment-amount"
                    endAdornment={
                      <InputAdornment position="end">%</InputAdornment>
                    }
                    label="Tasa de interés anual"
                  />
                </FormControl>
              </div>

              <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Tooltip title="Número de años por los que vas a realizar la inversión.">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Años a invertir
                    </InputLabel>
                  </Tooltip>
                  <OutlinedInput
                    type="number"
                    name="time"
                    value={inputs.time}
                    min="0"
                    max="50"
                    onChange={handleInputChange}
                    id="outlined-adornment-amount"
                    label="Años a invertir"
                  />
                </FormControl>
              </div>

              <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel id="label-compound">
                    <Tooltip title="Número de veces al año que se agrega el interés al capital (interés compuesto)">
                      Frecuencia anual de interés
                    </Tooltip>
                  </InputLabel>
                  <Select
                    name="compound"
                    labelId="label-compound"
                    id="label-compound"
                    value={inputs.compound}
                    label="Frecuencia anual de interés"
                    onChange={handleInputChange}
                    fullWidth
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.text}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Tooltip
                    title='Depósitos adicionales a lo que invertiste inicialmente, la
                      frecuencia del depósito es la misma que la que definas en
              "Frecuencia anual de interés"'
                  >
                    <InputLabel htmlFor="outlined-adornment-pmt">
                      Aportaciones adicionales
                    </InputLabel>
                  </Tooltip>
                  <OutlinedInput
                    name="pmt"
                    value={inputs.pmt}
                    onChange={handleInputChange}
                    id="outlined-adornment-pmt"
                    label="Aportaciones adicionales"
                  />
                </FormControl>
              </div>
            </Box>
          </Grid>

          <Grid size={8}>
            <Box sx={{ p: 2 }}>
              <CompoundInterest inputs={inputs} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{ p: 5 }}>
          <FaqSection />
      </Box>
    </Box>
  );
};

export default CompoundInterestView;
