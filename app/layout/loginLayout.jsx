import Content from "../login/sideContent";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.jsx";

const LoginLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
};

export default LoginLayout;
