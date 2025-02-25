import { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const usuarioPrueba = {
  email: "admin@example.com",
  password: "123456",
};

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === usuarioPrueba.email && password === usuarioPrueba.password) {
      const userData = { email };
      localStorage.setItem("user", JSON.stringify(userData));
      onLogin(userData);
    } else if (!email || !password) {
      setError("Todos los campos son obligatorios");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 8,
            p: 4,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5">Iniciar Sesion</Typography>
          <TextField
            fullWidth
            label="Correo Electronico"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Ingresar
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
