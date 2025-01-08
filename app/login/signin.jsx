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
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!email || !password) {
      setError(true);
      return;
    }
    navigate("/onboarding");
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
      <Card sx={{ padding: "20px", width: "100%", maxWidth: "400px" }}>
        <CardContent>
          <Typography gutterBottom variant="h3">
            Sign In
          </Typography>
          <FormControl fullWidth>
            <FormLabel htmlFor="email" sx={{ marginBottom: "16px" }}>
              Email
            </FormLabel>
            <TextField
              id="email-field"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error && !email}
              helperText={error && !email ? "Email is required" : ""}
              sx={{ marginBottom: "16px" }}
            />
            <FormLabel htmlFor="password-field" sx={{ marginBottom: "16px" }}>
              Password
            </FormLabel>
            <TextField
              id="password-field"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error && !password}
              helperText={error && !password ? "Password is required" : ""}
              sx={{ marginBottom: "16px" }}
            />
          </FormControl>
          <Button
            variant="contained"
            fullWidth
            size="medium"
            sx={{ padding: "15px", marginBottom: "16px" }}
            disableRipple
            disableElevation
            onClick={handleClick}
          >
            Sign in
          </Button>
          <Typography variant="body2" gutterBottom sx={{ textAlign: "center" }}>
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
            <Button fullWidth variant="outlined" startIcon={<FacebookIcon />}>
              Sign in with Facebook
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
