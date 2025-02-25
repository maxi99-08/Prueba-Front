import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
} from "@mui/material";

const ConsultaCliente = () => {
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(0);

  const dataClientes = [
    { nombre: "Max", apellido: "Salizar Rozas", email: "max@gmail.com" },
    {
      nombre: "Fernanda",
      apellido: "Herrera Herrera",
      email: "fer@herrrera.com",
    },
  ];

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const clienteMostrado = clientesFiltrados[paginaActual] || null;

  const handleAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const handleSiguiente = () => {
    if (paginaActual < clientesFiltrados.length - 1) {
      setPaginaActual(paginaActual + 1);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("clientes");
    if (data) {
      setClientes(JSON.parse(data));
    } else {
      localStorage.setItem("clientes", JSON.stringify(dataClientes));
    }
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Consultar Cliente
      </Typography>

      <TextField
        fullWidth
        label="Buscar por nombre"
        variant="outlined"
        value={filtro}
        onChange={(e) => {
          setFiltro(e.target.value);
          setPaginaActual(0);
        }}
        sx={{ mb: 3 }}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Nombre</strong>
            </TableCell>
            <TableCell>
              <strong>Apellido</strong>
            </TableCell>
            <TableCell>
              <strong>Email</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clienteMostrado ? (
            <TableRow>
              <TableCell>{clienteMostrado.nombre}</TableCell>
              <TableCell>{clienteMostrado.apellido}</TableCell>
              <TableCell>{clienteMostrado.email}</TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No se encontraron clientes
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAnterior}
          disabled={paginaActual === 0}
          sx={{ mr: 2 }}
        >
          Anterior
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={handleSiguiente}
          disabled={paginaActual >= clientesFiltrados.length - 1}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default ConsultaCliente;
