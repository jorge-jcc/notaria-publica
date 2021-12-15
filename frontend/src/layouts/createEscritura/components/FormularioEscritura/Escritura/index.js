import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import { useState } from 'react';

const Escritura = (props) => {
  const { setEscritura } = props;

  const [fechaInstrumento, setFechaInstrumento] = useState();
  const [fechaTestimonio, setFechaTestimonio] = useState();

  const [tipo, setTipo] = useState("");

  const handleFechaInstrumento = (newValue) => {
    setFechaInstrumento(newValue)
    setEscritura({target: {name:"fecha_instrumento", value: newValue}})
  };

  const handleFechaTestiomonio = (newValue) => {
    setFechaTestimonio(newValue)
    setEscritura({target: {name:"fecha_testimonio", value: newValue}})
  };

  const handleTipo = (event) => {
    setTipo(event.target.value)
    setEscritura(event)
  };

  return (
    <Grid container>
      <Grid container mb={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item xs={6} mb={1}>
          <Typography variant="overline" component="h2">
            Datos de la Escritura
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} lg={3}>
          <Grid container>
          <Grid item sx={{ px: 1 }} xs={6}>
            <TextField fullWidth 
              label="Volumen" 
              size="small" 
              variant="standard" 
              onChange={setEscritura} 
              name="volumen"
            />
        </Grid>
        <Grid item sx={{ px: 1 }} xs={6}>
          <TextField fullWidth 
            label="Instrumento" 
            size="small" 
            variant="standard"
            onChange={setEscritura} 
            name="instrumento"
          />
        </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item sx={{ px: 1 }} xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                value={fechaInstrumento}
                onChange={handleFechaInstrumento}
                label="Fecha del Instrumento"
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => <TextField {...params} fullWidth variant="standard"/>}
            />
            </LocalizationProvider>
          </Grid>
          <Grid item sx={{ px: 1 }} xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                value={fechaTestimonio}
                onChange={handleFechaTestiomonio}
                label="Fecha de Testimonio"
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => <TextField {...params} fullWidth variant="standard"/>}
            />
            </LocalizationProvider>
          </Grid>
          <Grid item sx={{ px: 1 }} xs={12}>
            <TextField fullWidth 
              label="Domicilio" 
              variant="standard"
              onChange={setEscritura} 
              name="domicilio"
            />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
            <TextField fullWidth 
              label="Estado" 
              variant="standard"
              onChange={setEscritura} 
              name="estado"
            />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
           <TextField fullWidth 
              label="Municipio" 
              variant="standard"
              onChange={setEscritura} 
              name="municipio"
            />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
           <TextField fullWidth 
            label="Localidad" 
            variant="standard"
            onChange={setEscritura} 
            name="localidad"
          />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
            <FormControl variant="standard" sx={{ py: 1 }} fullWidth>
              <InputLabel>Tipo de terreno</InputLabel>
              <Select
                value={tipo}
                label="Age"
                onChange={handleTipo}
                name="tipo"
              >
                <MenuItem value="Rural">Rural</MenuItem>
                <MenuItem value="Urbano">Urbano</MenuItem>
                <MenuItem value="Residencial">Residencial</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
            <TextField fullWidth 
              label="Superficie" 
              variant="standard" 
              onChange={setEscritura} 
              name="superficie"
            />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
            <TextField fullWidth 
              label="Precio" 
              variant="standard"
              onChange={setEscritura} 
              name="precio"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Escritura;
