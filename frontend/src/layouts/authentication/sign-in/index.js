import { useState, useRef } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic(props) {
  const { setUser } = props

  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState({value:"", error: false});
  const [password, setPassword] = useState({value:"", error: false});
  const [warningSB, setWarningSB] = useState(false);
  const formRef = useRef();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);

  const validateForm = () => {
    let err = true
    if (username.value === "") {
      setUsername({...username, error : true})
      err = false
    }
    if (password.value === "") {
      setPassword({...password, error : true})
      err = false
    }
    return err
  }

  const validarUsario = () => {
    if (!validateForm()) return
    formRef.current.reportValidity()
    if (username.value === "admin" && password.value === "admin"){
      setUser(username)
    }
    else{
      openWarningSB()
      setUsername({value:"", error: false})
      setPassword({value:"", error: false})
    }
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
      <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={1}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Notaria Pública
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <form ref={formRef}>
            <MDBox mb={2}>
              <MDInput type="text" 
                color="primary"
                label="Email" 
                fullWidth 
                value={username.value} 
                onChange={(e) => setUsername({value : e.target.value, error: false})}
                error={username.error}
                helperText={username.error ? 'El campo es requerido' : null}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" 
                label="Password" 
                fullWidth 
                value={password.value} 
                onChange={(e) => setPassword({value : e.target.value, error: false})}
                error={password.error}
                helperText={password.error ? 'El campo es requerido' : null}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Recordar contraseña
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={validarUsario}>
                Iniciar Sesión
              </MDButton>
            </MDBox>
          </form>
        </MDBox>
      </Card>
      <MDSnackbar
        color="warning"
        icon="warning"
        title="Error al iniciar sesión"
        content="El usuario o la contraseña son incorrectos"
        dateTime=""
        open={warningSB}
        onClose={closeWarningSB}
        close={closeWarningSB}
        bgWhite
      />
    </BasicLayout>
  );
}

export default Basic;
