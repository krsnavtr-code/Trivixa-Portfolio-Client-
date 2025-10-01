import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const Banner = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setMounted(true);
  }, []);

  const fadeInUp = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
  };

  const fadeInUpDelayed = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
  };

  const fadeInUpMoreDelayed = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 1.2s ease 0.4s, transform 1.2s ease 0.4s',
  };

  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "background.default",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "primary.contrastText",
        py: 10,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        {/* Name / Role */}
        <Box sx={fadeInUp}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "primary.main",
            }}
          >
            {t('banner.greeting', "Hi, I'm")} <span style={{ color: "#fff" }}>{t('banner.name', 'Krishna Avtar')}</span>
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box sx={fadeInUpDelayed}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 400, color: "grey.300" }}
          >
            {t('banner.title', 'Full Stack Web Developer 🚀 | MERN | UI/UX Enthusiast')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "600px", mx: "auto", mt: 2, color: "grey.400" }}
          >
            {t('banner.description', `I build modern, responsive, and scalable web applications that help
            businesses grow and ideas come to life. With expertise in MERN
            stack, I love crafting clean UI and seamless user experiences.`)}
          </Typography>
        </Box>

        {/* Buttons */}
        <Box sx={fadeInUpMoreDelayed}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              color="primary"
              size="large"
            >
              {t("banner.viewWork", "🚀 View My Work")}
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                borderColor: "primary.contrastText",
                color: "primary.contrastText",
                '&:hover': {
                  borderColor: 'primary.light',
                  color: 'primary.light',
                },
              }}
            >
              {t("banner.contactMe", "📩 Contact Me")}
            </Button>
            <Button
              component="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              color="secondary"
              size="large"
              sx={{
                '&:hover': {
                  color: 'secondary.light',
                },
              }}
            >
              {t("banner.downloadResume", "📄 Download Resume")}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
