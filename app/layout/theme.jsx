import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blueGrey["A200"],
    },
    secondary: {
      main: colors.grey[600],
    },
  },
});

export { theme };
