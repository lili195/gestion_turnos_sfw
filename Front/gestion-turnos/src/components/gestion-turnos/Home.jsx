import React from 'react';
import consultasImage from './turnos-images/imagen_consultas.png';
import pagosImage from './turnos-images/imagen_pagos.png';
import reclamosImage from './turnos-images/imagen_reclamos.png';
import Card from './Card';

const Home = () => {
  return (
    <div className="homeSection">
      <div className="homeDescription">
        <div className="homeTitle">Nuestros servicios</div>
        <div className="homeText">
          ¡Bienvenido a nuestra aplicación de gestión de turnos! <br/> Simplificando
          tu día, uno a la vez
        </div>
      </div>
      <div className="cardsContainer">
        <Card title={'Consultas'} image={consultasImage}/>
        <Card title={'Pagos'} image={pagosImage}/>
        <Card title={'Reclamos'} image={reclamosImage}/>
      </div>
    </div>
  );
};

export default Home;
