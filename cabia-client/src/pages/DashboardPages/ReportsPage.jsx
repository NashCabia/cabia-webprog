import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const formatReportNumber = (value) => value.toLocaleString("en-US");

const ReportsPage = () => {
  const printRef = useRef(null);

  const validAgeRows = rows.filter((row) => row.age !== null);
  const averageAge =
    validAgeRows.reduce((sum, row) => sum + Number(row.age || 0), 0) /
    validAgeRows.length;
  const completionRate = Math.round((7 / 9) * 100);

  const handlePrint = () => {
    const printContent = printRef.current;

    if (!printContent) {
      return;
    }

    const printWindow = window.open("", "_blank", "width=1200,height=900");

    if (!printWindow) {
      return;
    }

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join("");

    const exportedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Print Report</title>
          ${headMarkup}
          <style>
            @page {
              size: A4;
              margin: 16mm;
            }

            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              background: var(--bg);
              color: var(--text);
            }

            .report-shell {
              padding: 28px;
              background:
                radial-gradient(circle at top left, rgba(124, 58, 237, 0.16), transparent 28%),
                linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.88));
              min-height: 100vh;
            }

            .report-header {
              margin-bottom: 20px;
              padding: 22px;
              border: 1px solid var(--border);
              border-radius: 18px;
              background: rgba(255, 255, 255, 0.02);
            }

            .report-kicker {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 6px 12px;
              border-radius: 999px;
              background: rgba(124, 58, 237, 0.18);
              color: var(--accent);
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              margin-bottom: 10px;
            }

            .report-header h1 {
              margin: 0 0 6px;
              font-size: 30px;
              font-weight: 700;
              color: var(--text);
            }

            .report-header p {
              margin: 0;
              font-size: 14px;
              color: var(--muted);
              line-height: 1.5;
            }

            .report-meta {
              margin-top: 12px;
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }

            .report-meta span {
              padding: 6px 10px;
              border-radius: 999px;
              border: 1px solid var(--border);
              color: var(--text);
              background: rgba(255, 255, 255, 0.03);
              font-size: 12px;
            }

            .report-summary {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 12px;
              margin-bottom: 20px;
            }

            .summary-card {
              padding: 16px;
              border-radius: 16px;
              border: 1px solid var(--border);
              background: rgba(255, 255, 255, 0.03);
            }

            .summary-label {
              margin: 0 0 8px;
              color: var(--muted);
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1.2px;
            }

            .summary-value {
              margin: 0;
              color: var(--text);
              font-size: 28px;
              font-weight: 800;
            }

            .summary-note {
              margin: 6px 0 0;
              color: var(--muted);
              font-size: 12px;
            }

            .report-section {
              margin-bottom: 18px;
            }

            .report-section .MuiCard-root {
              box-shadow: none !important;
              border: 1px solid var(--border);
              break-inside: avoid;
              page-break-inside: avoid;
              background: var(--surface);
              border-radius: 18px;
            }

            .report-section .MuiCardContent-root {
              padding: 20px;
            }

            .report-section svg {
              max-width: 100%;
            }

            .report-footer {
              margin-top: 18px;
              display: flex;
              justify-content: space-between;
              gap: 12px;
              color: var(--muted);
              font-size: 12px;
              border-top: 1px solid var(--border);
              padding-top: 12px;
            }

            .report-footer strong {
              color: var(--text);
            }
          </style>
        </head>

        <body>
          <main class="report-shell">
            <header class="report-header">
              <div class="report-kicker">Laboratory 5 Report</div>
              <h1>Reports Summary</h1>
              <p>Analytics overview for generated reports, category breakdown, and completion performance, styled for printable PDF export.</p>
              <div class="report-meta">
                <span>Prepared on ${exportedAt}</span>
                <span>${formatReportNumber(rows.length)} report rows</span>
                <span>${completionRate}% completion rate</span>
              </div>
            </header>

            <section class="report-summary">
              <article class="summary-card">
                <p class="summary-label">Total Reports</p>
                <p class="summary-value">${formatReportNumber(rows.length)}</p>
                <p class="summary-note">Current reporting sample in this dashboard.</p>
              </article>
              <article class="summary-card">
                <p class="summary-label">Average Age</p>
                <p class="summary-value">${averageAge.toFixed(1)}</p>
                <p class="summary-note">Based on rows with numeric age values.</p>
              </article>
              <article class="summary-card">
                <p class="summary-label">Completed</p>
                <p class="summary-value">${completionRate}%</p>
                <p class="summary-note">Estimated completion rate from the sample data.</p>
              </article>
            </section>

            <section class="report-section">
              ${printContent.outerHTML}
            </section>

            <footer class="report-footer">
              <span><strong>Cabia WebProg</strong> - Laboratory 5 ReportsPage PDF preview</span>
              <span>Theme colors are inherited from the app CSS variables</span>
            </footer>
          </main>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Reports
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Report analytics overview showing generated reports, category
            breakdown, and current completion performance.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Generate</Button>
          <Button variant="outlined" onClick={handlePrint}>
            Download PDF
          </Button>
          <Button variant="outlined">Filter</Button>
        </Stack>
      </Stack>

      <Stack ref={printRef} spacing={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Report Output
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              This chart compares how many reports were generated and how many
              were completed across the last four months.
            </Typography>

            <BarChart
              series={[
                { data: [18, 24, 20, 27], label: "Generated" },
                { data: [12, 19, 17, 23], label: "Completed" },
              ]}
              height={300}
              xAxis={[
                {
                  data: ["January", "February", "March", "April"],
                  scaleType: "band",
                  label: "Months",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Report Category Share
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                This chart shows the distribution of report requests by category
                for the current reporting period.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 14, label: "Sales" },
                        { id: 1, value: 10, label: "Users" },
                        { id: 2, value: 8, label: "Inventory" },
                        { id: 3, value: 6, label: "Finance" },
                      ],
                    },
                  ]}
                  width={280}
                  height={220}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Completion Rate
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                The gauge highlights the current percentage of reports completed
                on time based on the latest reporting cycle.
              </Typography>

              <Box
                sx={{
                  minHeight: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Gauge width={180} height={180} value={78} />
              </Box>
            </CardContent>
          </Card>
        </Stack>

        <Card>
          <CardContent>
            <DataGrid
              rows={rows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;