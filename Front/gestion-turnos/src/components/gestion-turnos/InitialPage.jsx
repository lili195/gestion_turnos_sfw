import React from 'react';
import loginImage from './turnos-images/imagen_login2.png';
import { Link } from 'react-router-dom';

const InitialPage = ({ onStart }) => {
  return (
    <div className="startPage">
      <img className="startPageImage" src={loginImage}></img>
      <div className="startPageContent">
        <h1 className="startPageTitle">Bienvenido</h1>
        <h2 className="startPageSubtitle">
          ¡Bienvenido a nuestra aplicación de gestión de turnos!
          <br />
          <br /> Simplificando tu día, uno a la vez
        </h2>
        <Link
          to="/home"
          onClick={onStart}
          className="startPageButton"
        >
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default InitialPage;
