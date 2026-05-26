import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

function Register() {
  const { register, error } = useAppContext();

  const [form, setForm] = useState({
    firstName: "Edil",
    lastName: "Student",
    email: "newstudent@test.com",
    password: "123456",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async () => {
    const success = await register(form);
    if (success) alert("Registered successfully");
  };

  return (
    <Box>
      <Typography variant="h4" className="page-title">Register</Typography>

      <Box className="form-card">
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <TextField fullWidth label="First Name" value={form.firstName} onChange={(e) => handleChange("firstName", e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Last Name" value={form.lastName} onChange={(e) => handleChange("lastName", e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Password" type="password" value={form.password} onChange={(e) => handleChange("password", e.target.value)} sx={{ mb: 2 }} />

        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default Register;