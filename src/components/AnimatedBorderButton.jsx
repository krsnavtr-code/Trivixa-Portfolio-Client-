import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const AnimatedOmButton = ({ to, children, ...props }) => {
  return (
    <Button
      component={RouterLink}
      to={to}
      variant="outlined"
      size="large"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "primary.main",
        border: "none",
        backgroundColor: "secondary.main",
        transition: "all 0.3s ease",
        fontFamily: "'Noto Sans Devanagari', sans-serif",

        "& .om-symbol": {
          content: '"ॐ"',
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "2rem",
          color: "primary.main",
          opacity: 0,
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 2,
        },

        "&:hover .om-symbol": {
          opacity: 0.5,
          transform: "translate(-50%, -50%) scale(1.1)",
          filter: "drop-shadow(0 0 6px rgba(255, 166, 0, 0.83))",
        },
        ...props.sx,
      }}
      {...props}
    >
      <span>{children}</span>
      <span className="om-symbol">ॐ</span>
    </Button>
  );
};

export default AnimatedOmButton;
