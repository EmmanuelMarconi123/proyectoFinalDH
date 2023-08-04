import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Cards = ({ nombre, descripcion, id }) => {
  return (
    <Grid container justifyContent="space-evenly" spacing={1}>
      <Grid item xs={4} sm={6}>
        <Card sx={{ maxWidth: 180 }}>
          <CardMedia
            sx={{ height: 140 }}
            image=""
            title={nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">Agregar al carrito</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
