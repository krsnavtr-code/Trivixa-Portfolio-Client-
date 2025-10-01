import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnimatedBorderButton from "./AnimatedBorderButton";


const Banner = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setMounted(true);
  }, []);

  const fadeInUp = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  };

  const fadeInUpDelayed = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
  };

  const fadeInUpMoreDelayed = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 1.2s ease 0.4s, transform 1.2s ease 0.4s",
  };

  return (
    <Box
      sx={(theme) => ({
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0f172a, #1e293b)"
            : "linear-gradient(135deg, #f8fafc, #e2e8f0)",
        color: "text.primary",
        py: 10,
        px: 2,
        transition: "background 0.3s ease",
      })}
    >
      <Container maxWidth="md">
        {/* Name / Role */}
        <Box sx={fadeInUp}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 500,
              letterSpacing: "-0.5px",
              color: "primary.main",
            }}
          >
            {t("banner.greeting", "Hi, I'm")}{" "}
            <Box
              component="span"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                textShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 0 10px rgba(59, 130, 246, 0.5)"
                    : "none",
              }}
            >
              {t("banner.name", "Krishna Avtar")}
            </Box>
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box sx={fadeInUpDelayed}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 500,
              color: "text.secondary",
              mb: 3,
            }}
          >
            {t(
              "banner.title",
              "Full Stack Web Developer 🚀 | MERN | UI/UX Enthusiast"
            )}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              mt: 2,
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            {t(
              "banner.description",
              `I build modern, responsive, and scalable web applications that help
            businesses grow and ideas come to life. With expertise in MERN
            stack, I love crafting clean UI and seamless user experiences.`
            )}
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
            <AnimatedBorderButton to="/projects">
              {t("banner.viewWork", "🚀 View My Work")}
            </AnimatedBorderButton>

            <AnimatedBorderButton to="/contact">
              {t("banner.contactMe", "📩 Contact Me")}
            </AnimatedBorderButton>
            <AnimatedBorderButton to="/resume.pdf">
              {t("banner.downloadResume", "📄 Download Resume")}
            </AnimatedBorderButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
