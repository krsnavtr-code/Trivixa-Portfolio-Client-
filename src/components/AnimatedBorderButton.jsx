import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const AnimatedBorderButton = ({ to, children, ...props }) => {
  return (
    <Button
      component={RouterLink}
      to={to}
      variant="outlined"
      size="large"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "primary.light",
        border: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: "2px",
          backgroundColor: "primary.light",
          transition: "all 0.3s ease",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: "2px",
          backgroundColor: "primary.light",
          transition: "all 0.3s ease",
        },
        "& span::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "2px",
          height: 0,
          backgroundColor: "primary.light",
          transition: "all 0.3s ease",
        },
        "& span::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "2px",
          height: 0,
          backgroundColor: "primary.light",
          transition: "all 0.3s ease",
        },
        "&:hover::before": {
          width: "100%",
        },
        "&:hover::after": {
          width: "100%",
        },
        "&:hover span::before": {
          height: "100%",
        },
        "&:hover span::after": {
          height: "100%",
        },
        ...props.sx,
      }}
      {...props}
    >
      <span>{children}</span>
    </Button>
  );
};

export default AnimatedBorderButton;
