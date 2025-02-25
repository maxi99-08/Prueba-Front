import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const menuItems = [
  { text: "Inicio", icon: <HomeIcon />, path: "/" },
  { text: "Nuevo Cliente", icon: <PersonAddIcon />, path: "/nuevo-cliente" },
  {
    text: "Consultar Cliente",
    icon: <SearchIcon />,
    path: "/consulta-cliente",
  },
  { text: "Configuracion", icon: <SettingsIcon />, path: "/configuracion" },
];

const Dashboard = ({ onLogout, children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("clientes");
    onLogout();
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 350,
          flexShrink: 0,
        }}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: "#1F2937",
            color: "#fff",
            padding: "20px",
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem
            button
            onClick={handleLogout}
            sx={{
              backgroundColor: "#DC2626",
              borderRadius: "10px",
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children ? (
          children
        ) : (
          <Typography variant="h4">Bienvenido al Dashboard</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
