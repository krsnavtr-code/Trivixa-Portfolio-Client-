import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnimatedBorderButton from "./AnimatedBorderButton";

const Banner = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reusable animation styles
  const fadeInUp = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  return (
    <Box
      sx={(theme) => ({
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0B2545, #1e293b)"
            : "linear-gradient(135deg, #e2e8f0, #f8fafc)",
        py: { xs: 10, md: 14 },
        px: 2,
        transition: "background 0.5s ease, color 0.3s ease",
        position: "relative",
        overflow: "hidden",
      })}
    >
      {/* Decorative background shapes (soft gradient lights) */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(11,37,69,0.25), transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* Title */}
        <Box sx={fadeInUp(0)}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "text.primary",
              letterSpacing: "-0.5px",
              [(theme) => theme.breakpoints.down("sm")]: {
                fontSize: "2.2rem",
              },
            }}
          >
            {t("banner.greeting", "Hi, I'm")}{" "}
            <Box
              component="span"
              sx={{
                color: "primary.text",
                fontWeight: 800,
                textShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 0 15px rgba(96,165,250,0.5)"
                    : "0 0 6px rgba(11,37,69,0.2)",
              }}
            >
              {t("banner.name", "Krishna Avtar")}
            </Box>
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box sx={fadeInUp(0.3)}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 500,
              color: "text.primary",
              mb: 2,
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
              maxWidth: "640px",
              mx: "auto",
              mt: 2,
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            {t(
              "banner.description",
              "I build modern, responsive, and scalable web applications that help businesses grow and ideas come to life. With expertise in the MERN stack, I love crafting clean UI and seamless user experiences."
            )}
          </Typography>
        </Box>

        {/* Buttons */}
        <Box sx={fadeInUp(0.6)}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            <AnimatedBorderButton to="/projects" glow>
              {t("banner.viewWork", "🚀 View My Work")}
            </AnimatedBorderButton>

            <AnimatedBorderButton to="/contact" glow>
              {t("banner.contactMe", "📩 Contact Me")}
            </AnimatedBorderButton>

            <AnimatedBorderButton to="/resume.pdf" glow>
              {t("banner.downloadResume", "📄 Download Resume")}
            </AnimatedBorderButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
