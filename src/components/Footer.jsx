import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GitHub />,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <LinkedIn />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <Twitter />,
      url: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    { icon: <Email />, url: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        mt: "auto",
        backgroundColor:
          theme.palette.mode === "light"
            ? "rgba(0, 0, 0, 0.02)"
            : "rgba(255, 255, 255, 0.03)",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {t('footer.copyright', { year: currentYear })}
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    backgroundColor: "primary.logo",
                    color: "white",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>

          <Typography variant="body2" color="text.secondary">
            {t('footer.built_with')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
