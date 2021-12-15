/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import FormularioEscritura from "./components/FormularioEscritura"

function CreateEscritura({ setUser }) {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini setUser={setUser} />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid justifyContent="center" container spacing={3}>
            <Grid item xs={12} md={8}>
              <FormularioEscritura />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default CreateEscritura;
