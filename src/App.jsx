import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NuevoCliente from "./pages/NuevoCliente";
import ConsultaCliente from "./pages/ConsultaCliente";
import Configuracion from "./pages/Configuracion";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" /> : <Login onLogin={setUser} />
          }
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard onLogout={() => setUser(null)} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/nuevo-cliente"
          element={
            user ? (
              <Dashboard onLogout={() => setUser(null)}>
                <NuevoCliente />
              </Dashboard>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/consulta-cliente"
          element={
            user ? (
              <Dashboard onLogout={() => setUser(null)}>
                <ConsultaCliente />
              </Dashboard>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Configuracion"
          element={
            user ? (
              <Dashboard onLogout={() => setUser(null)}>
                <Configuracion />
              </Dashboard>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
