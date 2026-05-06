import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

// Location data
const locationData = {
  name: "National University-Manila",
  lat: 14.684253,
  lng: 120.994314,
  address: "E-551 F Jhocson St, Sampaloc, Manila, 1088 Metro Manila",
};

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

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
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Location Map
          </Typography>
          <Box
            sx={{
              height: 320,
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <MapContainer
              center={[locationData.lat, locationData.lng]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[14.604253, 120.994314]}>
                <Popup>
                  National University-Manila <br />
                  <p><i>551 F Jhocson St, Sampaloc, Manila 1008 Metro Manila</i></p>
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        </CardContent>
      </Card>

      {/* Data Grid */}
      <Typography variant="h5" gutterBottom>
        Users Overview
      </Typography>

      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        <Box sx={{ flex: 1 }}>
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

        <Box sx={{ width: 320 }}>
          {/* Use CSS variables from project theme for chip colors */}
          {/* Fallback to theme palette if variables are not present */}
          
          
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">Recent Activity</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Jon created a new report" secondary="2 hours ago" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Cersei updated user role" secondary="Yesterday" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Daenerys exported CSV" secondary="3 days ago" />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6">Quick Status</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Chip
                  label="Online: 12"
                  sx={{ backgroundColor: "var(--accent, #7c3aed)", color: "var(--text, #fff)" }}
                />

                <Chip
                  label="Invited: 4"
                  sx={{ backgroundColor: "rgba(255,255,255,0.03)", color: "var(--muted)" }}
                />

                <Chip
                  label="Disabled: 1"
                  sx={{ backgroundColor: "rgba(255,255,255,0.02)", color: "var(--muted)" }}
                />
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}