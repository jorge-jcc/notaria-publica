import { useState } from "react"
import moment from "moment"
import { values, size } from "lodash";

// @mui material components
import Card from "@mui/material/Card"
import Grid from '@mui/material/Grid'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDButton from "components/MDButton"
import MDSnackbar from "components/MDSnackbar";

import { createEscrituraAPI } from "api/escrituras"

import Duenio from "./Duenio"
import Escritura from "./Escritura";

const initEscritura = () => ({
  volumen: "",
	instrumento: "",
	fecha_instrumento: new Date(),
	fecha_testimonio: new Date(),
	duenioActual: {
		nombre: "",
		ap_paterno: "",
		ap_materno: "",
		direccion: "",
		telefono: "",
	},
	duenioAnterior: {
		nombre: "",
		ap_paterno: "",
		ap_materno: "",
		direccion: "",
		telefono: "",
	},
	domicilio: "",
	localidad: "",
	municipio: "",
	estado: "",
	tipo: "",
	superficie: "",
	precio: "",
	notario: {
		id: 123,
    cedula: 12331,
    nombre: "Pancracio",
    apellido_pat: "",
    apellido_mat: "",
    num_telefono: "",
    direccion: "",
    localidad: "",
    municipio: "",
    estado: "",
    num_notaria: 32,
    permiso_segob: "123GRMS"
	}
})

function FormularioEscritura() {
  moment.locale("es")
  const [notificacion, setNotificacion] = useState({status: false, title: ""});
  const [loading, setLoading] = useState(false);
  const [escritura, setEscritura] = useState(initEscritura)

  const closeNotificacion = () => setNotificacion({status:false});
  const handleClose = () => {
    setLoading(false);
  };

  const handleInputChange = (event) => {
    const [section, key] = event.target.name.split(".")
    if (key){
      setEscritura({
        ...escritura,
        [section]:{
          ...escritura[section],
          [key]: event.target.value
        },
      })
    } else{
      setEscritura({
        ...escritura,
        [section] : event.target.value
      })
    }
  }

  const createEscritura = () =>{
    let validCount = 0;
    values(escritura).some(value => {
      if (value) validCount += 1 
      return null
    })
    values(escritura.duenioActual).some(value => {
      if (value) validCount += 1
      return null
    })
    values(escritura.duenioAnterior).some(value => {
      if (value) validCount += 1
      return null
    })
    if (validCount !== size(escritura) + size(escritura.duenioActual) + size(escritura.duenioAnterior)){
      setNotificacion({
        status: true,
        color: "warning",
        icon: "warning",
        title: "Formulario incompleto",
        content: "Por favor completa todos los campos",
        dateTime: ""
      })
      return
    }
    setLoading(true);
    createEscrituraAPI(escritura)
    .then(() => {
      setNotificacion({
        status: true,
        color: "success",
        icon: "check",
        title: "Escritura Registrada",
        content: "La escritura se registro correctamente",
        dateTime: ""
      })
    })
    .catch(() => {
      setNotificacion({
        status: true,
        color: "error",
        icon: "error",
        title: "Error",
        content: "La escritura no se logro registrar",
        dateTime: ""
      })
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={handleClose}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      <Card sx={{ height: "100%" }}>
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h5" fontWeight="medium">
            Crear Escritura
          </MDTypography>
          <MDButton color="primary" size="small" onClick={createEscritura}>
            Registrar Escritura
          </MDButton>
        </MDBox>
        <MDBox p={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <Grid container>
              <Grid item xs={12} mb={4}>
                <Escritura setEscritura={handleInputChange} />
              </Grid>
              <Grid item xs={12} mb={4}>
                <Duenio text="Actual" setEscritura={handleInputChange} />
              </Grid>
              <Grid item xs={12}>
                <Duenio text="Anterior" setEscritura={handleInputChange} />
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </Card>
      {notificacion.status ? 
        <MDSnackbar
          color={notificacion.color}
          icon={notificacion.icon||"check"}
          title={notificacion.title}
          content={notificacion.content}
          dateTime={notificacion.dateTime}
          open={notificacion.status}
          onClose={closeNotificacion}
          close={closeNotificacion}
          bgWhite
        />
      : <></>
      }
    </div>
  );
}

export default FormularioEscritura;