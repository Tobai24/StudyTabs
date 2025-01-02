import Content from "../login/sideContent";
import { Box, ThemeProvider } from "@mui/material";
import { Theme } from "./theme.jsx";
import SignIn from "../login/signin.jsx";
import SignUp from "../login/signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SignInPage = () => {
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

const LoginLayout = () => {
  return (
    <Router>
      <Routes path="/">
        <Route path="/" />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/signup"
          element={
            <ThemeProvider theme={Theme}>
              <SignUp />
            </ThemeProvider>
          }
        />
      </Routes>
    </Router>
  );
};

export default LoginLayout;
