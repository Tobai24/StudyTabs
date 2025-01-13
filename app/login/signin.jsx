import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Divider,
  Box,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import ForgotPassword from "./forgot_password";

const SignIn = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (isValid) {
      navigate("/onboarding");
    }
    return isValid;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{ padding: "20px", width: "100%", maxWidth: "400px" }}
        component="form"
        onSubmit={handleSubmit}
      >
        <CardContent>
          <Typography gutterBottom variant="h3">
            Sign In
          </Typography>
          <FormControl fullWidth>
            <FormLabel htmlFor="email" sx={{ marginBottom: "16px" }}>
              Email
            </FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? "error" : "primary"}
              sx={{ marginBottom: "16px" }}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password-field" sx={{ marginBottom: "16px" }}>
                Password
              </FormLabel>
              <Link
                component="button"
                type="button"
                onClick={handleClickOpen}
                variant="body2"
                sx={{ alignSelf: "baseline" }}
              >
                Forgot your password?
              </Link>
            </Box>

            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ marginBottom: "16px" }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ForgotPassword open={open} handleClose={handleClose} />

            <Button
              variant="contained"
              fullWidth
              size="medium"
              sx={{ padding: "15px", marginBottom: "16px" }}
              disableRipple
              disableElevation
              onClick={validateInputs}
            >
              Sign in
            </Button>

            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              Don&apos;t have an account?{" "}
              <Link to="/signup" variant="body2" component={RouterLink}>
                Sign up
              </Link>
            </Typography>
            <Divider>or</Divider>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: "16px",
              }}
            >
              <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
                Sign in with Google
              </Button>
            </Box>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
