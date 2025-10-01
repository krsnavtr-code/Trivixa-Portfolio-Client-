import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Banner from "../components/Banner";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Banner Section */}
      <Banner />

      {/* Featured Projects Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {t("home.featuredProjects", "Featured Projects")}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          paragraph
          sx={{ mb: 6 }}
        >
          {t("home.featuredSubtitle", "Check out some of my recent work")}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* This would be populated with actual featured projects */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{ p: 2, textAlign: "center", height: "100%" }}
            >
              <Box sx={{ height: 200, bgcolor: "grey.200", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                {t("home.projectTitle", "Project Title")}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {t(
                  "home.projectDescription",
                  "A brief description of the project and the technologies used."
                )}
              </Typography>
              <Button
                component={RouterLink}
                to="/projects"
                variant="outlined"
                size="small"
              >
                {t("home.viewProject", "View Project")}
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{ p: 2, textAlign: "center", height: "100%" }}
            >
              <Box sx={{ height: 200, bgcolor: "grey.200", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                {t("home.projectTitle", "Project Title")}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {t(
                  "home.projectDescription",
                  "A brief description of the project and the technologies used."
                )}
              </Typography>
              <Button
                component={RouterLink}
                to="/projects"
                variant="outlined"
                size="small"
              >
                {t("home.viewProject", "View Project")}
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{ p: 2, textAlign: "center", height: "100%" }}
            >
              <Box sx={{ height: 200, bgcolor: "grey.200", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                {t("home.projectTitle", "Project Title")}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {t(
                  "home.projectDescription",
                  "A brief description of the project and the technologies used."
                )}
              </Typography>
              <Button
                component={RouterLink}
                to="/projects"
                variant="outlined"
                size="small"
              >
                {t("home.viewProject", "View Project")}
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            size="large"
          >
            {t("home.viewAllProjects", "View All Projects")}
          </Button>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 8,
          borderTop: 1,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            {t("home.ctaTitle", "Have a project in mind?")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            {t(
              "home.ctaSubtitle",
              "I'm always open to discussing product design work or partnership opportunities."
            )}
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
          >
            {t("home.getInTouch", "Get in Touch")}
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
