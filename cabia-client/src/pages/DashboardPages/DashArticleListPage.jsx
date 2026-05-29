import { useMemo, useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { getArticles, subscribe, addArticle, removeArticle } from '../../services/articleService';

const initialArticles = getArticles();

const blankForm = {
  image: "",
  title: "",
  description: "",
};

const DashArticleListPage = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [saveError, setSaveError] = useState("");
  const [saving, setSaving] = useState(false);

  const filteredArticles = useMemo(() => {
    const q = search.trim().toLowerCase();

    return articles.filter((article) =>
      [article.title, article.description]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [articles, search]);

  const openModal = () => {
    setForm(blankForm);
    setErrors({});
    setSaveError("");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setForm(blankForm);
    setErrors({});
    setSaveError("");
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {};

    if (!form.title.trim()) nextErrors.title = "Title is required.";
    if (!form.description.trim()) nextErrors.description = "Description is required.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const slug = form.title
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");

    const newArticle = {
      id: Date.now(),
      name: slug,
      image: form.image.trim(),
      title: form.title.trim(),
      description: form.description.trim(),
    };

    try {
      setSaving(true);
      setSaveError("");
      await addArticle(newArticle);
      closeModal();
    } catch (error) {
      setSaveError(
        error?.response?.data?.message || "Unable to save article. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const deleteArticle = async (id) => {
    try {
      await removeArticle(id);
    } catch (error) {
      alert(error?.response?.data?.message || "Unable to delete article.");
    }
  };

  useEffect(() => {
    const unsub = subscribe(setArticles);
    return () => unsub();
  }, []);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 120,
      sortable: false,
      renderCell: ({ row }) =>
        row.image ? (
          <img
            src={row.image}
            alt={row.title}
            style={{
              width: 70,
              height: 45,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        ) : (
          "No image"
        ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
      minWidth: 280,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      sortable: false,
      renderCell: ({ row }) => (
        <Button
          size="small"
          color="error"
          variant="outlined"
          onClick={() => deleteArticle(row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

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
        <Typography variant="h4">Articles</Typography>

        <Button variant="contained" onClick={openModal}>
          Add Article
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          label="Search articles"
          placeholder="Search by title or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
      </Paper>

      <Paper sx={{ p: 2 }}>
        {filteredArticles.length ? (
          <Box sx={{ height: 520, width: "100%" }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5, page: 0 },
                },
              }}
            />
          </Box>
        ) : (
          <Alert severity="info">No articles found.</Alert>
        )}
      </Paper>

      <Dialog open={modalOpen} onClose={closeModal} fullWidth maxWidth="sm">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>Add Article</DialogTitle>

          <DialogContent dividers>
            <Stack spacing={2} sx={{ pt: 1 }}>
              {saveError ? <Alert severity="error">{saveError}</Alert> : null}
              <TextField
                name="image"
                label="Image URL"
                placeholder="https://example.com/image.jpg"
                value={form.image}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                name="title"
                label="Title"
                value={form.title}
                onChange={handleChange}
                error={Boolean(errors.title)}
                helperText={errors.title}
                fullWidth
              />

              <TextField
                name="description"
                label="Description"
                value={form.description}
                onChange={handleChange}
                error={Boolean(errors.description)}
                helperText={errors.description}
                multiline
                rows={4}
                fullWidth
              />
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeModal} disabled={saving}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={saving}>
              {saving ? "Saving..." : "Save Article"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;