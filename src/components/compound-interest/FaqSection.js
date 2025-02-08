import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const FaqSection = () => {
  const createData = (type, description, times) => ({
    type,
    description,
    times,
  });

  const rows = [
    createData("Anual", "Genera interés una vez al año.", 1),
    createData("Mensual", "Genera interés cada mes.", 12),
    createData("Quincenal", "Genera interés cada quince días.", 24),
    createData("Semanal", "Genera interés cada 7 días.", 52),
    createData("Diario", "Genera interés cada día.", 365),
  ];
  const rows2 = [
    createData(
      "Anual",
      "Genera interés una vez al año.",
      "1 x 100 = $100 anuales"
    ),
    createData(
      "Mensual",
      "Genera interés cada mes.",
      "12 x 100 = $1,200 anuales"
    ),
    createData(
      "Quincenal",
      "Genera interés cada quince días.",
      "24 x 100 = $2,400 anuales"
    ),
    createData(
      "Semanal",
      "Genera interés cada 7 días.",
      "52 x 100 = $5,200 anuales"
    ),
    createData(
      "Diario",
      "Genera interés cada día.",
      "365 x 100 = $36,500 anuales"
    ),
  ];

  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5">Preguntas Frecuentes</Typography>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            ¿Qué es y cómo funciona la frecuencia anual de interés?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Tipo de Interés</TableCell>
                  <TableCell align="center">Tiempo</TableCell>
                  <TableCell align="center">Repeticiones al año</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.type}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.times}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">
            ¿Cómo funcionan las aportaciones adicionales?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Tipo de Interés</TableCell>
                  <TableCell align="center">Tiempo</TableCell>
                  <TableCell align="center">Repeticiones al año</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <TableRow
                    key={row.type}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.times}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqSection;
