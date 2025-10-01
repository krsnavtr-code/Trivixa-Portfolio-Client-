import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  useTheme as useMuiTheme,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import { useThemeContext } from "./ThemeProvider";
import { useTranslation } from "react-i18next";

const navLinks = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "projects", href: "#projects" },
  { id: "skills", href: "#skills" },
  { id: "contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { mode, toggleColorMode } = useThemeContext();
  const { t, i18n } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleLanguageMenuClose();
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Slide appear={false} direction="down" in={true}>
        <AppBar
          position="fixed"
          elevation={scrolled ? 4 : 0}
          sx={{
            height: 55,
            justifyContent: "center",
            backdropFilter: "blur(8px)",
            backgroundColor: scrolled ? "background.paper" : "transparent",
            transition: "all 0.3s ease",
            background: "var(--logo-bg)",
            color: "var(--logo-text)",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: "55px !important", // Match AppBar height
              px: { xs: 2, sm: 3 }, // Add horizontal padding
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{ mr: 2 }}
            >
              <img
                src="./src/assets/trivixa-fix-size-brand-logo.png"
                alt="Logo"
                style={{ height: "28px", borderRadius: "4px" }} // Slightly smaller logo
              />
            </IconButton>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              {navLinks.map((item) => (
                <Box
                  component="button"
                  sx={{
                    position: "relative",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.4,
                    mx: 0.5,
                    transition: "color 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "10%",
                      right: "10%",
                      bottom: 0,
                      height: "3px",
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      transform: "scaleX(0)",
                      transformOrigin: "right",
                      transition: "transform 0.4s ease",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                      transformOrigin: "left",
                    },
                  }}
                >
                  {t(`navbar.${item.id}`)}
                </Box>
              ))}

              {/* Language Selector */}
              <Box sx={{ ml: 1 }}>
                <IconButton
                  onClick={handleLanguageMenuOpen}
                  size="small"
                  aria-label="change language"
                  sx={{
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <LanguageIcon fontSize="small" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleLanguageMenuClose}
                >
                  <MenuItem onClick={() => changeLanguage("en")}>
                    <Typography variant="body2">
                      {t("language.en")} {i18n.language === "en" && "✓"}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("hi")}>
                    <Typography variant="body2">
                      {t("language.hi")} {i18n.language === "hi" && "✓"}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("ta")}>
                    <Typography variant="body2">
                      {t("language.ta")} {i18n.language === "ta" && "✓"}
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <IconButton
                onClick={toggleColorMode}
                aria-label={
                  mode === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                sx={{
                  ml: 1,
                  "&:hover": {
                    color: "#FFFFFF",
                  },
                }}
              >
                {mode === "dark" ? "🌞" : "🌙"}
              </IconButton>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 250,
              backgroundColor: "background.paper",
            },
          }}
        >
          <List>
            {navLinks.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.href)}>
                  <ListItemText primary={t(`navbar.${item.id}`)} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton onClick={() => changeLanguage("en")}>
                <ListItemText
                  primary={t("language.en")}
                  secondary={i18n.language === "en" ? "✓" : ""}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => changeLanguage("hi")}>
                <ListItemText
                  primary={t("language.hi")}
                  secondary={i18n.language === "hi" ? "✓" : ""}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => changeLanguage("ta")}>
                <ListItemText
                  primary={t("language.ta")}
                  secondary={i18n.language === "ta" ? "✓" : ""}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
