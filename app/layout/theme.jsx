import { createTheme, colors } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      // main: colors.blueGrey[500],
      main: colors.indigo[200],
    },
  },
  typography: {
    fontFamily: "'LXGW WenKai TC', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export { Theme };
