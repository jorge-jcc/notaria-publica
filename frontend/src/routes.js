import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import CreateEscritura from "layouts/createEscritura";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Escrituras",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Nueva Escritura",
    key: "createEscritura",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/createEscritura",
    component: <CreateEscritura />,
  },
];

export default routes;
