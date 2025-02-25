import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Typography,
  Tooltip as MuiTooltip,
  CircularProgress,
} from "@mui/material";
import ResultCard from "./ResultCard";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CompoundInterestChart = ({ inputs }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [tableMetrics, setTableMetrics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentStrategy, setCurrentStrategy] = useState({
    principal: 0,
    deposits: 0,
    interests: 0,
    total: 0,
  });

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  useEffect(() => {
    setLoading(true);
    let categories = [];
    let metrics = { principal: [], deposits: [], interests: [], total: [] };
    let realRate = inputs.rate / 100;

    for (let year = 1; year <= inputs.time; year++) {
      categories.push(`${year} año${year > 1 ? "s" : ""}`);
      metrics.principal.push(inputs.principal);
      let deposited = year * inputs.compound * inputs.pmt;
      metrics.deposits.push(deposited);

      let compoundInterest = (
        inputs.principal *
        Math.pow(1 + realRate / inputs.compound, inputs.compound * year)
      ).toFixed(2);
      let futureValue = (
        inputs.pmt *
        ((Math.pow(1 + realRate / inputs.compound, inputs.compound * year) -
          1) /
          (realRate / inputs.compound))
      ).toFixed(2);
      let total = Number(compoundInterest) + Number(futureValue);

      metrics.interests.push((total - deposited - inputs.principal).toFixed(2));
      metrics.total.push(total.toFixed(2));
    }

    setChartData({
      labels: categories,
      datasets: [
        {
          label: "Depósito inicial",
          backgroundColor: "#001F3F", // Dark Navy
          data: metrics.principal,
        },
        {
          label: "Depósitos adicionales acumulados",
          backgroundColor: "#00509E", // Royal Blue
          data: metrics.deposits,
        },
        {
          label: "Interés acumulado",
          backgroundColor: "#00A1E4", // Bright Sky Blue
          data: metrics.interests,
        },
      ],
    });
      

    let tableData = categories.map((_, index) => ({
      years: index + 1,
      principal: formatCurrency(metrics.principal[index]),
      deposits: formatCurrency(metrics.deposits[index]),
      interests: formatCurrency(metrics.interests[index]),
      total: formatCurrency(metrics.total[index]),
    }));

    setTableMetrics(tableData);
    setCurrentStrategy(
      tableData[tableData.length - 1] || {
        principal: 0,
        deposits: 0,
        interests: 0,
        total: 0,
      }
    );
    setLoading(false);
  }, [inputs]);

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div style={{ border: "1px solid #eee", padding: "20px" }}>
      <MuiTooltip
        title="Interés compuesto es el interés generado sobre los intereses al reinvertirlos. 
        Esta calculadora asume que cada año tus ganancias serán reinvertidas y no se hará ningún retiro."
      >
        <Typography variant="h6" align="center">
          Gráfico de interés compuesto
        </Typography>
      </MuiTooltip>
      <Bar data={chartData} options={options} />
      <Divider style={{ margin: "20px 0" }} />
      <ResultCard currentStrategy={currentStrategy} />
      <Divider style={{ margin: "20px 0" }} />

      <Typography variant="h6">Resultados</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Años</TableCell>
                <TableCell>Depósito inicial</TableCell>
                <TableCell>Depósitos adicionales</TableCell>
                <TableCell>Interés acumulado</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableMetrics.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.years}</TableCell>
                  <TableCell>{row.principal}</TableCell>
                  <TableCell>{row.deposits}</TableCell>
                  <TableCell>{row.interests}</TableCell>
                  <TableCell>{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default CompoundInterestChart;
