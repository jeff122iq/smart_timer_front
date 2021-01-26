import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2b62ff",
    },
    secondary: {
      main: "#f9c229",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "$labelcolor",
          "@media (hover: none)": {
            backgroundColor: "$labelcolor",
          },
        },
        "&:active": {
          backgroundColor: "$labelcolor",
        },
      },
    },
    MuiButtonBase: {
      root: {
        backgroundColor: "$labelcolor",
        "&:active": {
          backgroundColor: "$labelcolor",
          opacity: "1",
        },
      },
    },
  },
});

export default theme;
