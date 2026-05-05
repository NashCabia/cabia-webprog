import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const rows = [
  { id: 1, name: "John Doe", age: 20 },
  { id: 2, name: "Jane Smith", age: 21 },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 100 },
];

export default function UsersPage() {
  return (
    <Box>
      <Typography variant="h4">Users</Typography>

      <div style={{ height: 400 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
}