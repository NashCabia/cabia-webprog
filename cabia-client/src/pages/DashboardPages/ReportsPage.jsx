import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function ReportsPage() {
  return (
    <Box>
      <Typography variant="h4">Reports</Typography>

      <BarChart
        xAxis={[{ scaleType: "band", data: ["Q1", "Q2", "Q3", "Q4"] }]}
        series={[{ data: [10, 20, 30, 25] }]}
        width={500}
        height={300}
      />
    </Box>
  );
}