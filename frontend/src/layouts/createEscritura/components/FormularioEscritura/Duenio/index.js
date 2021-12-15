import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Duenio = (props)  => {
  const { text, setEscritura } = props

  return (
    <Grid container>
      <Grid item xs={12} mb={1}>
        <Typography variant="overline" component="h2">
          Datos del Dueño { text }
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item sx={{ px: 1 }} xs={4}>
            <TextField fullWidth 
              label="Nombre" 
              variant="standard"
              onChange={setEscritura} 
              name={`duenio${text}.nombre`}
            />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
            <TextField fullWidth 
              label="Apellido Paterno" 
              variant="standard"
              onChange={setEscritura} 
              name={`duenio${text}.ap_paterno`}
            />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
            <TextField fullWidth 
              label="Apellido Materno" 
              variant="standard"
              onChange={setEscritura} 
              name={`duenio${text}.ap_materno`}
            />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={8}>
            <TextField fullWidth 
              label="Direccion" 
              variant="standard"
              onChange={setEscritura} 
              name={`duenio${text}.direccion`}
            />
          </Grid>
          <Grid item sx={{ px: 1 }} xs={4}>
           <TextField fullWidth 
              label="Teléfono" 
              variant="standard"
              onChange={setEscritura} 
              name={`duenio${text}.ap_telefono`}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Duenio;
