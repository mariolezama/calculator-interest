import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MoneyIcon from '@mui/icons-material/Money';

export default function ResultCard({ currentStrategy }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={3} item>
        <Card sx={{ height: 140 }} variant="outlined">
            <CardContent>
              <WalletIcon />
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Deposito Inicial
              </Typography>

              <Typography variant="h5"sx={{ color: "text.secondary", mb: 1.5 }}>
                {currentStrategy.principal}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={3} item>
        <Card sx={{ height: 140 }} variant="outlined">            <CardContent>
              <MoneyIcon />
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
               Adicionales acumulados
              </Typography>
              <Typography variant="h5" sx={{ color: "text.secondary", mb: 1.5 }}>
                {currentStrategy.deposits}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={3} item>
          <Card sx={{ height: 140 }} variant="outlined">
            <CardContent>
              <ShowChartIcon/>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Interés acumulado
              </Typography>
              <Typography variant="h5" sx={{ color: "text.secondary", mb: 1.5 }}>
                {currentStrategy.interests}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={3} item>
        <Card sx={{ height: 140 }} variant="outlined">
            <CardContent>
              <AttachMoneyIcon/>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Total
              </Typography>
              <Typography variant="h5" sx={{ color: "text.secondary", mb: 1.5 }}>
                {currentStrategy.total}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
