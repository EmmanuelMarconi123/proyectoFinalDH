import styles from "../form/form.module.css";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";

const Form = () => {
  // const [herramienta, setHerramienta] = useState("");

  let initialValues = {
    herramienta: "",
    fecha: "",
  };

  const sendForm = (data) => {
    console.log(data);
  };

  const {handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    onSubmit: sendForm,
  });

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          spacing={2}
        >
          <Grid item xs={12} md={5}>
            <TextField
              type="text"
              label="Tipo de Herramienta"
              variant="outlined"
              fullWidth
              name="herramienta"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              type="date"
              variant="outlined"
              fullWidth
              name="fecha"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Buscar
        </Button>
      </form>
  
    </> 
  );
};

export default Form;
