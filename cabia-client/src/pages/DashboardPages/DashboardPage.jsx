import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const mapCenter = [14.684253, 120.994314];

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
    width: 180,
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

export default function DashboardPage() {
  const validAgeRows = rows.filter((row) => row.age !== null);
  const averageAge =
    validAgeRows.reduce((sum, row) => sum + Number(row.age || 0), 0) /
    validAgeRows.length;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Summary Section */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ minWidth: 180 }}>
          <CardContent>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">{rows.length}</Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 180 }}>
          <CardContent>
            <Typography variant="h6">Average Age</Typography>
            <Typography variant="h4">{averageAge.toFixed(1)}</Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Gauges */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mb: 4 }}>
        <Gauge width={100} height={100} value={50} />
        <Gauge width={100} height={100} value={50} valueMin={10} valueMax={60} />
      </Stack>

      {/* Charts */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mb: 4 }}>
        <BarChart
          series={[
            { data: [35, 44, 24, 34], label: "Series 1" },
            { data: [51, 6, 49, 30], label: "Series 2" },
          ]}
          height={290}
          xAxis={[
            {
              data: ["Q1", "Q2", "Q3", "Q4"],
              scaleType: "band",
              label: "Quarters",
            },
          ]}
          sx={{ width: "100%" }}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Series A" },
                { id: 1, value: 15, label: "Series B" },
                { id: 2, value: 20, label: "Series C" },
              ],
            },
          ]}
          width={250}
          height={250}
        />
      </Stack>

      {/* Location Map */}
      <Typography variant="h5" gutterBottom>
        Location Map
      </Typography>

      <Card sx={{ mb: 4, overflow: "hidden" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
          <Box sx={{ flex: 1, minHeight: 320 }}>
            <MapContainer
              center={[14.604253, 120.994314]}
              zoom={17}
              scrollWheelZoom={false}
              style={{ height: "100%", minHeight: 320, width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[14.604253, 120.994314]} icon={markerIcon}>
                <Popup>National University - Manila</Popup>
              </Marker>
            </MapContainer>
          </Box>

          <CardContent sx={{ minWidth: { md: 260 } }}>
            <Typography variant="overline" color="primary">
              Campus Location
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              National University - Manila
            </Typography>
            <Typography variant="body2" color="text.secondary">
              551 M.F. Jhocson St, Sampaloc, Manila, Metro Manila
            </Typography>
          </CardContent>
        </Stack>
      </Card>

      {/* Data Grid */}
      <Typography variant="h5" gutterBottom>
        Users Overview
      </Typography>

      <Box sx={{ height: 400, width: "100%", mb: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
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
      </Box>
    </Box>
  );
}