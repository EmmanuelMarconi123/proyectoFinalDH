import { Link } from "react-router-dom";
import { routes } from "../../../assets/routes";
import Button from "@mui/material/Button";
import styles from "./navbar.module.css";
import logo from '../../../assets/recursos/logo.png'
import { Typography } from "@mui/material";


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to={routes.home}>
          <img className={styles.image} src={logo} alt="Logo Empresa" />
        </Link>
        <Typography variant="h6" color='secondary' alignItems="center">Frase Pegada al logo</Typography>
      </div>
      <div className={styles.buton}>
      <Link to={routes.newUser}><Button variant="contained">Crear Cuenta</Button></Link>
      <Link to={routes.login}><Button variant="contained">Iniciar Sesion</Button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
