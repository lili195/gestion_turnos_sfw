import React from 'react';
import consultasImage from './turnos-images/imagen_consultas.png';
import pagosImage from './turnos-images/imagen_pagos.png';
import reclamosImage from './turnos-images/imagen_reclamos.png';
import Card from './Card';
import { PAGES, SERVICES } from '../../constants/constants';
import { Link } from 'react-router-dom';

const Home = ({ handleService }) => {
  return (
    <div className="section">
      <div className="homeDescription">
        <div className="homeTitle">Nuestros servicios</div>
        <div className="homeText">
          ¡Bienvenido a nuestra aplicación de gestión de turnos! <br />{' '}
          Simplificando tu día, uno a la vez
        </div>
      </div>
      <div className="cardsContainer">
        <Link className="linkCard" to="/shedule">
          <Card
            title={SERVICES.CONSULTAS}
            image={consultasImage}
            handleService={handleService}
          />
        </Link>
        <Link className="linkCard" to="/shedule">
          <Card
            title={SERVICES.PAGOS}
            image={pagosImage}
            handleService={handleService}
          />
        </Link>
        <Link className="linkCard" to="/shedule">
          <Card
            title={SERVICES.RECLAMOS}
            image={reclamosImage}
            handleService={handleService}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
