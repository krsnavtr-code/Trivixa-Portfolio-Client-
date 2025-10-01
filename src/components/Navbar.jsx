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
  useScrollTrigger,
  Slide,
  useTheme as useMuiTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleColorMode } = useThemeContext();
  const theme = useMuiTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item.href)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!scrolled}>
        <AppBar
          position="fixed"
          elevation={scrolled ? 4 : 0}
          sx={{
            height: 55, // Reduced from default 64px
            justifyContent: "center",
            backdropFilter: "blur(8px)",
            backgroundColor: scrolled ? "background.paper" : "transparent",
            transition: "all 0.3s ease",
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
                  key={item.name}
                  component="button"
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    background: "none",
                    border: "none",
                    color: "text.primary",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.4,
                    mx: 0.5,
                    borderRadius: 1,
                    transition: "all 0.2s ease",
                      "&:hover": {
                          backgroundColor: "primary.logo",
                          color: "white",
                    },
                  }}
                >
                  {item.name}
                </Box>
              ))}
              <Box
                component="button"
                onClick={toggleColorMode}
                sx={{
                  background: "none",
                  border: "none",
                  color: "text.primary",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  ml: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "action.hover",
                  },
                }}
              >
                {mode === "dark" ? "🌞" : "🌙"}
              </Box>
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
          anchor="right"
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
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
