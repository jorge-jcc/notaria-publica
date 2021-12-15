/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { getEscrituras } from "api/escrituras";
import { useState, useEffect } from 'react';
import moment from "moment"

export default function data() {
  const [escrituras, setEscrituras] = useState([]);
  moment.locale("es")

  useEffect(() => {
    getEscrituras().then(res => {
      setEscrituras(res.data.escrituras)
    })
  }, []);

  const IdentifierLabel = ({ 
    volumen, 
    instrumento 
  }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {volumen}
        </MDTypography>
        <MDTypography variant="caption">{instrumento}</MDTypography>
      </MDBox>
    </MDBox>
  );
  
  const TextPlain = ({ text, formato="regular" }) => (
    <MDTypography component="a" href="#" variant="caption" fontWeight={formato}>
            {text}
    </MDTypography>
  );

  const DuenioLabel = ({ nombre, direccion }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {nombre}
      </MDTypography>
      <MDTypography variant="caption">{direccion}</MDTypography>
    </MDBox>
  );

  const UbicacionLabel = ({ localidad, municipio, estado }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {localidad} , {municipio}
      </MDTypography>
      <MDTypography variant="caption">{estado}</MDTypography>
    </MDBox>
  );

  const TipoLabel = ({ tipo }) => {
    let color = "";
    switch (tipo){
      case "rural":
        color = "success";
        break;
      case "urbano":
        color = "info";
        break;
      case "hipoteca":
        color = "danger";
        break;
      default:
        color = "dark";
        break;
    };
    return (
      <MDBox ml={-1}>
            <MDBadge badgeContent={tipo} color={color} variant="gradient" size="sm" />
          </MDBox>
    )
  }

  return {
    columns: [
      { Header: "Identificador", accessor: "escritura", width: "45%", align: "left" },
      { Header: "Fecha Instrumento", accessor: "fecha_instrumento", align: "center" },
      { Header: "Fecha testimonio", accessor: "fecha_testimonio", align: "center" },
      { Header: "Dueño", accessor: "duenio_act", align: "left" },
      { Header: "Dueño Anterior", accessor: "duenio_ant", align: "left" },
      { Header: "Dirección", accessor: "direccion", align: "center" },
      { Header: "Ubicación", accessor: "ubicacion", align: "center" },
      { Header: "Tipo", accessor: "tipo", align: "center" },
      { Header: "Superficie", accessor: "superficie", align: "center" },
      { Header: "Precio operación", accessor: "precio", align: "center" },
      { Header: "Notario", accessor: "notario", align: "center" },
    ],

    rows: escrituras.map(e => ({
      escritura: <IdentifierLabel volumen={e.Record.volumen} instrumento={e.Record.instrumento} />,
      fecha_instrumento: <TextPlain text={e.Record.fecha_instrumento} />,
      fecha_testimonio: <TextPlain text={e.Record.fecha_testimonio} />,
      duenio_act: <DuenioLabel nombre={e.Record.duenioActual.nombre} 
        direccion={e.Record.duenioActual.direccion} />,
      duenio_ant: <DuenioLabel nombre={e.Record.duenioAnterior.nombre} 
        direccion={e.Record.duenioAnterior.direccion} />,
      direccion: <TextPlain text={e.Record.domicilio} />,
      ubicacion: <UbicacionLabel localidad={e.Record.localidad} municipio={e.Record.municipio} estado={e.Record.estado}/>,
      tipo: <TipoLabel tipo={e.Record.tipo}/>,
      superficie: <TextPlain text={e.Record.superficie}/>,
      precio: <TextPlain text={e.Record.precio}/>,
      notario: <TextPlain text={
        `${e.Record.notario.cedula} (${e.Record.notario.nombre} ${e.Record.notario.apellido_pat} ${e.Record.notario.apellido_mat})`
      }/>,
    }))
  }
}
