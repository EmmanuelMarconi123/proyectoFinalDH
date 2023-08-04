import { Typography } from "@mui/material";
import Form from "../../common/form/Form";
import styles from "../home/home.module.css";
import Cards from "../../common/cards/cards";

const Home = () => {
  const herramienasDeAlquiler = [
    {
      id: 1,
      nombre: "martillo",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 2,
      nombre: "taladro",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 3,
      nombre: "tornillo",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 4,
      nombre: "pala",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 5,
      nombre: "retroescabadora",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 6,
      nombre: "cortadora",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 7,
      nombre: "maderas",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 8,
      nombre: "fierros",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 9,
      nombre: "grua",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
    {
      id: 10,
      nombre: "soldadora",
      descripcion: "lakjslkajsdlkj alskhalksdj",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <Typography color="primary" variant="h5" className={styles.titulo}>
          Busca Ofertas de Herramientas para tu negocio
        </Typography>
        <Form />
      </div>
      <div className="card">
        {herramienasDeAlquiler.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            nombre={card.nombre}
            descripcion={card.descripcion}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
