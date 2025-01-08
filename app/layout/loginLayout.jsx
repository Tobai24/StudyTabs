import Content from "../login/sideContent";
import { Box, ThemeProvider, Stack } from "@mui/material";
import { Theme } from "./theme.jsx";
import SignIn from "../login/signin.jsx";
import SignUp from "../login/signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "../onboarding/onboard.jsx";

const SignInPage = () => {
  return (
    <Stack
      sx={{
        backgroundImage: "url('/wave-haikei.svg')",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          height: "98vh",
          margin: "0 auto",
          gap: "30px",
          maxWidth: "1200px",
        }}
      >
        <ThemeProvider theme={Theme}>
          <Box
            sx={{
              flex: 1,
              display: {
                xs: "none",
                sm: "none",
                lg: "inherit",
              },
            }}
          >
            <Content />
          </Box>
          <Box sx={{ flex: 1, maxWidth: "430px" }}>
            <SignIn />
          </Box>
        </ThemeProvider>
      </Box>
    </Stack>
  );
};

const LoginLayout = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default LoginLayout;
