import React from 'react';
import { Link } from 'react-router-dom';

import userIcon from './turnos-images/userIcon.svg';
import adminIcon from './turnos-images/adminIcon.svg';
import logOutIcon from './turnos-images/logOut.svg';
import calendarIcon from './turnos-images/calendar.svg';
import listIcon from './turnos-images/list.svg';
import stopIcon from './turnos-images/stop.svg';
import notificationIcon from './turnos-images/notifications.svg';
import homeIcon from './turnos-images/homeIcon.svg';

import { USER_TYPE } from '../../constants/constants';

const NavMenu = ({ userType, signOut, handleService, userName }) => {
  return (
    <div className="menuContainer">
      <ul className="menuList">
        <Link
          to="/home"
          className="menuItem"
          onClick={() => handleService('')}
        >
          <img className="menuIcon" src={homeIcon} />
          <span>Inicio</span>
        </Link>
        <Link to="/shedule" className="menuItem">
          <img className="menuIcon" src={calendarIcon} />
          <span>Crear turno</span>
        </Link>
        {userType === USER_TYPE.USER && (
          <Link to="/your-turn" className="menuItem">
            <img className="menuIcon" src={listIcon} />
            <span>Ver turno</span>
          </Link>
        )}
        <Link to="/cancel-turn" className="menuItem">
          <img className="menuIcon" src={stopIcon} />
          <span>Cancelar turno</span>
        </Link>
        {userType === USER_TYPE.USER && (
          <Link to="/notifications" className="menuItem">
            <img className="menuIcon" src={notificationIcon} />
            <span>Notificaciones</span>
          </Link>
        )}
      </ul>
      <ul className="menuList logOut">
        <Link className="menuItem">
          {userType === 'user' && <img className="menuIcon" src={userIcon} />}
          {userType === 'admin' && <img className="menuIcon" src={adminIcon} />}
          <span>{userName}</span>
        </Link>
        <Link
          to="/"
          className="menuItem"
          onClick={() => {
            signOut();
            handleService('');
          }}
        >
          <img className="menuIcon" src={logOutIcon} />
          <span>Salir</span>
        </Link>
      </ul>
    </div>
  );
};

export default NavMenu;
