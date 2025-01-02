import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Typography,
  TextField,
  Button,
  FormLabel,
  FormControl,
  Box,
  Divider,
  Link,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link as RouterLink } from "react-router-dom";

const SignIn = () => {
  return (
    <Card sx={{ padding: "10px" }}>
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
  );
};

export default SignIn;
