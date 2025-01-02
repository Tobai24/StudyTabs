import Content from "../login/sideContent";
import { Box, ThemeProvider } from "@mui/material";
import { Theme } from "./theme.jsx";
import SignIn from "../login/signin.jsx";

const LoginLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "100vh",
        margin: "0 auto",
        gap: "10px",
      }}
    >
      <ThemeProvider theme={Theme}>
        <Box sx={{ flex: 1 }}>
          <Content />
        </Box>
        <Box sx={{ flex: 1 }}>
          <SignIn />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default LoginLayout;
