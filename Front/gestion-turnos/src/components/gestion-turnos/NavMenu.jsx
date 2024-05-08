import React from 'react';
import userIcon from './turnos-images/userIcon.svg';
import adminIcon from './turnos-images/adminIcon.svg';
import logOutIcon from './turnos-images/logOut.svg';
import calendarIcon from './turnos-images/calendar.svg';
import listIcon from './turnos-images/list.svg';
import stopIcon from './turnos-images/stop.svg';
import notificationIcon from './turnos-images/notifications.svg';

const NavMenu = ({ userType, signOut }) => {
  return (
    <div className="menuContainer">
      <div className="menuItems">
        <img className="menuIcon" src={calendarIcon} />
        {userType === 'user' && <img className="menuIcon" src={listIcon} />}
        <img className="menuIcon" src={stopIcon} />
        {userType === 'user' && (
          <img className="menuIcon" src={notificationIcon} />
        )}
      </div>
      <div className="menuItems mb">
        {userType === 'user' && <img className="menuIcon" src={userIcon} />}
        {userType === 'admin' && <img className="menuIcon" src={adminIcon} />}
        <img className="menuIcon" src={logOutIcon} onClick={signOut} />
      </div>
    </div>
  );
};

export default NavMenu;
