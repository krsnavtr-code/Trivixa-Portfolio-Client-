import { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Grid, 
  CircularProgress,
  Alert,
  Paper
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import useContactForm from '../hooks/useContactForm';

const Contact = () => {
  const { t } = useTranslation();
  const { 
    formData, 
    submitStatus, 
    loading, 
    handleChange, 
    handleSubmit 
  } = useContactForm();

  return (
    <Container
      maxWidth="md"
      sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {t("contact.title")}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ mb: 4 }}
      >
        {t("contact.subtitle")}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, backgroundColor: "background.paper" }}>
        {submitStatus.message && (
          <Alert
            severity={submitStatus.success ? "success" : "error"}
            sx={{ mb: 3 }}
          >
            {submitStatus.message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t("contact.form.name")}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t("contact.form.email")}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("contact.form.message")}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={6}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={loading}
                fullWidth
                sx={{ py: 1.5 }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  t("contact.form.submit")
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;