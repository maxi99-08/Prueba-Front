import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";

const NuevoCliente = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const dataClientes = [
    { nombre: "Max", apellido: "Salizar Rozas", email: "max@gmail.com" },
    { nombre: "Fernanda", apellido: "Herrera Herrera", email: "fer@herrrera.com" },
  ]

  const handleGuardarCliente = () => {
    if (!nombre || !apellido || !email) {
      setMensaje("Todos los campos son obligatorios.");
      return;
    }

    const nuevoCliente = { nombre, apellido, email };

    const clientesGuardados =
      JSON.parse(localStorage.getItem("clientes")) || [];
    clientesGuardados.push(nuevoCliente);
    localStorage.setItem("clientes", JSON.stringify(clientesGuardados));

    setMensaje("Cliente agregado correctamente.");
    setNombre("");
    setApellido("");
    setEmail("");

    setTimeout(() => setMensaje(""), 3000);
  };

  useEffect(() => {
    const data = localStorage.getItem("clientes");
    if (!data) {
      localStorage.setItem("clientes", JSON.stringify(dataClientes));
    }
    
  }, []);

  

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Datos Personales
        </Typography>

        {mensaje && <Alert severity="info">{mensaje}</Alert>}

        <TextField
          fullWidth
          label="Nombre"
          variant="outlined"
          margin="normal"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <TextField
          fullWidth
          label="Apellido"
          variant="outlined"
          margin="normal"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleGuardarCliente}
        >
          Guardar Cliente
        </Button>
      </Box>
    </Container>
  );
};

export default NuevoCliente;
