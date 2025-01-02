import { createTheme, colors } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: colors.blueGrey[500],
    },
  },
  typography: {
    fontFamily: "'LXGW WenKai TC', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export { Theme };
