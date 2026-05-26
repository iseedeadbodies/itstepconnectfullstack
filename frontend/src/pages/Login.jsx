import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

function Login() {
  const { login, error } = useAppContext();
  const [email, setEmail] = useState("edil@test.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) alert("Login success");
  };

  return (
    <Box>
      <Typography variant="h4" className="page-title">Login</Typography>

      <Box className="form-card">
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;