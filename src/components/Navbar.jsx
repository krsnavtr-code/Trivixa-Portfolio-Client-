import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import { useThemeContext } from "./ThemeProvider";
import { useTranslation } from "react-i18next";
import Logo from "../assets/trivixa-fix-size-brand-logo.png";

const navLinks = [
  { id: "home", to: "/" },
  { id: "about", to: "/about" },
  { id: "projects", to: "/projects" },
  { id: "skills", to: "/skills" },
  { id: "contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { mode, toggleColorMode } = useThemeContext();
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleLanguageMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleLanguageMenuClose = () => setAnchorEl(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleLanguageMenuClose();
  };

  const handleNavClick = () => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mode === "dark";

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
            backgroundColor: 'background.primary',
            boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: "55px !important",
              px: { xs: 2, sm: 3 },
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Link to="/">
                <img
                  src={Logo}
                  alt="Trivixa Logo"
                  style={{ height: "30px", borderRadius: "4px" }}
                />
              </Link>
            </IconButton>

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              {navLinks.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    onClick={handleNavClick}
                    disableRipple
                    sx={{
                      position: "relative",
                      px: 1.5,
                      py: 0,
                      mx: 0.5,
                      color: 'text.primary',
                      transition: "color 0.3s ease",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: "10%",
                        right: "10%",
                        bottom: 0,
                        height: "3px",
                        borderRadius: "50%",
                        backgroundColor: 'primary.contrastText',
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
                    <ListItemText
                      primary={t(`navbar.${item.id}`)}
                      primaryTypographyProps={{
                        variant: "body1",
                        fontWeight: 500,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}

              {/* Language Selector */}
              <Box sx={{ ml: 1 }}>
                <IconButton
                  onClick={handleLanguageMenuOpen}
                  size="small"
                  sx={{
                    color: 'text.primary',
                    "&:hover": { backgroundColor: "action.hover" },
                  }}
                >
                  <LanguageIcon fontSize="small" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleLanguageMenuClose}
                >
                  {["en", "hi", "ta"].map((lng) => (
                    <MenuItem key={lng} onClick={() => changeLanguage(lng)}>
                      <Typography variant="body2">
                        {t(`language.${lng}`)} {i18n.language === lng && "✓"}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Dark / Light Toggle */}
              <IconButton
                onClick={toggleColorMode}
                aria-label={
                  mode === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                sx={{
                  ml: 1,
                  color: 'text.primary',
                  "&:hover": {
                    color: 'primary.contrastText',
                  },
                }}
              >
                {mode === "dark" ? "🌞" : "🌙"}
              </IconButton>
            </Box>

            {/* Mobile Menu Button */}
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

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: '250px',
              backgroundColor: 'background.paper',
              color: 'text.primary',
            },
          }}
        >
          <List>
            {navLinks.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  onClick={handleNavClick}
                >
                  <ListItemText primary={t(`navbar.${item.id}`)} />
                </ListItemButton>
              </ListItem>
            ))}
            {["en", "hi", "ta"].map((lng) => (
              <ListItem key={lng} disablePadding>
                <ListItemButton onClick={() => changeLanguage(lng)}>
                  <ListItemText
                    primary={t(`language.${lng}`)}
                    secondary={i18n.language === lng ? "✓" : ""}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
