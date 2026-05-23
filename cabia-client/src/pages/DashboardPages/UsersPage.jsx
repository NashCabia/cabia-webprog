import { useEffect, useMemo, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DataGrid } from "@mui/x-data-grid";

import {
  fetchUsers,
  createUser,
  updateUser,
} from "../../services/userService";

const roles = ["admin", "editor", "viewer"];
const genders = ["male", "female", "other"];
const statusOptions = ["all", "active", "inactive"];


const blankForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  type: "editor",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "";

const normalizeText = (value) => String(value ?? "").trim().toLowerCase();

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const loadUsersFromApi = async () => {
    try {
      setLoading(true);
      setLoadError("");

      const response = await fetchUsers();
      const data = response.data;

      setUsers(
        data.map((user) => ({
          ...user,
          id: user._id,
          type: user.type || "editor",
        }))
      );
    } catch (error) {
      console.error(error);
      setLoadError("Unable to load users from server.");
    } finally {
      setLoading(false);
    }
  };

  const [accessDenied, setAccessDenied] = useState(false);

useEffect(() => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  if (currentUser?.type === "editor") {
    setAccessDenied(true);
    setLoading(false);
    return;
  }

  loadUsersFromApi();
}, []);

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user, password: "" } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const clearFilters = () => {
    setSearch("");
    setRoleFilter("all");
    setGenderFilter("all");
    setStatusFilter("all");
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    if (!form.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!form.gender.trim()) nextErrors.gender = "Gender is required.";
    if (!form.address.trim()) nextErrors.address = "Address is required.";

    if (!/^\d+$/.test(form.age.trim())) nextErrors.age = "Age must be a number only.";
    if (!/^\d{11}$/.test(form.contactNumber.trim())) nextErrors.contactNumber = "Contact number must be exactly 11 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (/\s/.test(username)) nextErrors.username = "Username must not contain spaces.";

    if (!modal.id && form.password.trim().length < 8) {
      nextErrors.password = "Password must be at least 8 characters long.";
    }

    if (users.some((user) => user.id !== modal.id && user.email === email)) {
      nextErrors.email = "Email address already exists.";
    }

    if (users.some((user) => user.id !== modal.id && user.username === username)) {
      nextErrors.username = "Username already exists.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      type: form.type.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    try {
      if (modal.id) {
        if (!payload.password) delete payload.password;
        await updateUser(modal.id, payload);
      } else {
        await createUser(payload);
      }

      await loadUsersFromApi();
      closeModal();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to save user.");
    }
  };

  const toggleStatus = async (id) => {
    const selectedUser = users.find((user) => user.id === id);
    if (!selectedUser) return;

    try {
      await updateUser(id, { isActive: !selectedUser.isActive });
      await loadUsersFromApi();
    } catch {
      alert("Failed to update user status.");
    }
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const filteredUsers = useMemo(() => {
    const query = normalizeText(search);

    return users.filter((user) => {
      const searchable = [user.firstName, user.lastName, user.email, user.username]
        .map(normalizeText)
        .join(" ");

      return (
        (!query || searchable.includes(query)) &&
        (roleFilter === "all" || user.type === roleFilter) &&
        (genderFilter === "all" || user.gender === genderFilter) &&
        (statusFilter === "all" ||
          (statusFilter === "active" ? user.isActive : !user.isActive))
      );
    });
  }, [users, search, roleFilter, genderFilter, statusFilter]);

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      minWidth: 170,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { field: "username", headerName: "Username", minWidth: 150 },
    { field: "age", headerName: "Age", width: 90 },
    {
      field: "gender",
      headerName: "Gender",
      minWidth: 110,
      valueGetter: (_, row) => labelize(row.gender),
    },
    { field: "contactNumber", headerName: "Contact Number", minWidth: 160 },
    { field: "email", headerName: "Email", flex: 1.1, minWidth: 220 },
    {
      field: "type",
      headerName: "Role",
      minWidth: 120,
      valueGetter: (_, row) => labelize(row.type),
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? "Active" : "Inactive"}
          color={row.isActive ? "success" : "default"}
          variant={row.isActive ? "filled" : "outlined"}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 220,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>
            Edit
          </Button>

          <Button
            size="small"
            variant="contained"
            color={row.isActive ? "warning" : "success"}
            onClick={() => toggleStatus(row.id)}
          >
            {row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  if (accessDenied) {
  return (
    <Box sx={{ width: "100%", minWidth: 0 }}>
      <Alert severity="error" sx={{ mb: 2 }}>
        Access Denied. Editors are not allowed to access the Users Page.
      </Alert>

      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Access Denied
        </Typography>

        <Typography color="text.secondary">
          Your editor account does not have permission to manage users.
        </Typography>
      </Paper>
    </Box>
  );
}

  return (
    
    <Box sx={{ width: "100%", minWidth: 0 }}>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h4">Users</Typography>

        <Button variant="contained" onClick={() => openModal()} sx={{ width: { xs: "100%", sm: "auto" } }}>
          Add User
        </Button>
      </Box>

      {loadError ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {loadError}
        </Alert>
      ) : null}

      <Paper sx={{ p: { xs: 1.5, sm: 2 }, mb: 2, minWidth: 0, overflow: "hidden" }}>
        <Stack spacing={2}>
          <TextField
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            label="Search users"
            placeholder="Search by first name, last name, email, or username"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography variant="body2" color="text.secondary">
                    Search
                  </Typography>
                </InputAdornment>
              ),
            }}
          />

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField select fullWidth label="Role" value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)}>
              <MenuItem value="all">All roles</MenuItem>
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {labelize(role)}
                </MenuItem>
              ))}
            </TextField>

            <TextField select fullWidth label="Gender" value={genderFilter} onChange={(event) => setGenderFilter(event.target.value)}>
              <MenuItem value="all">All genders</MenuItem>
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {labelize(gender)}
                </MenuItem>
              ))}
            </TextField>

            <TextField select fullWidth label="Status" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
              {statusOptions.map((status) => (
                <MenuItem key={status} value={status}>
                  {status === "all" ? "All statuses" : labelize(status)}
                </MenuItem>
              ))}
            </TextField>

            <Button variant="outlined" onClick={clearFilters} sx={{ minWidth: { xs: "100%", md: 140 } }}>
              Clear Filters
            </Button>
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: "hidden" }}>
        <Box sx={{ height: { xs: 460, sm: 520 }, width: "100%", minWidth: 0 }}>
          <DataGrid
            rows={filteredUsers}
            columns={columns}
            loading={loading}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5, page: 0 },
              },
            }}
          />
        </Box>
      </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? "Edit User" : "Add User"}</DialogTitle>

          <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("firstName", "First Name")} />
                <TextField {...fieldProps("lastName", "Last Name")} />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("age", "Age", { inputMode: "numeric", placeholder: "Numbers only" })} />
                <TextField {...fieldProps("gender", "Gender", { select: true })}>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("contactNumber", "Contact Number", { inputMode: "numeric", placeholder: "11 digits" })} />
                <TextField {...fieldProps("email", "Email Address", { type: "email" })} />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("type", "Role", { select: true })}>
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {labelize(role)}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField {...fieldProps("username", "Username")} />
              </Stack>

              <TextField
                {...fieldProps("password", "Password", {
                  type: showPassword ? "text" : "password",
                  placeholder: modal.id ? "Leave blank to keep current password" : "At least 8 characters",
                  InputProps: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                })}
              />

              <TextField {...fieldProps("address", "Address", { multiline: true, rows: 3 })} />

              <FormControlLabel
                control={<Switch name="isActive" checked={form.isActive} onChange={handleChange} />}
                label={form.isActive ? "User status: Active" : "User status: Inactive"}
              />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? "Update User" : "Save User"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;