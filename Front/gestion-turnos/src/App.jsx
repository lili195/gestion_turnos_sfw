import { useState, useEffect } from 'react';
import './App.css';
import NavMenu from './components/gestion-turnos/NavMenu';
import Header from './components/gestion-turnos/Header';
import Home from './components/gestion-turnos/Home';
import InitialPage from './components/gestion-turnos/InitialPage';
import { PAGES, USER_TYPE } from './constants/constants';
import SheduleTurn from './components/gestion-turnos/SheduleTurn';
import YourTurn from './components/gestion-turnos/YourTurn';
import CancelTurn from './components/gestion-turnos/CancelTurn';
import Notifications from './components/gestion-turnos/Notifications';
import Keycloak from 'keycloak-js';

function App() {
  const [keycloak, setKeycloak] = useState(null);
  const [userType, setUserType] = useState(USER_TYPE.USER); // Inicialmente asumimos que es un usuario normal
  const [started, setStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState(PAGES.INITIAL);
  const [currentService, setCurrentService] = useState('');
  const [userName, setUserName] = useState('Pilar');

  useEffect(() => {
    const keycloakInstance = new Keycloak({
      url: 'http://localhost:8090',
      realm: 'TurnsManagementApp',
      clientId: 'frontend',
    });
    setKeycloak(keycloakInstance);
    // setCurrentPage(PAGES.HOME);
  }, []);

  const handleLogout = () => {
    if (keycloak) {
      keycloak.logout();
      setStarted(false);
      setUserType(USER_TYPE.USER);
      setUserName('');
    }
  };

  const handleStart = () => {
    if (keycloak) {
      keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
        if (authenticated) {
          setStarted(true);
          setUserType(
            keycloak.hasRealmRole('Administrator')
              ? USER_TYPE.ADMIN
              : USER_TYPE.USER
              
          );
          console.log(keycloak.token);
          setUserName(keycloak.tokenParsed.preferred_username);
          setCurrentPage(PAGES.HOME);
        }
      });
    }
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };
  
  const handleService = (service) => {
    setCurrentService(service);
  };

  return started ? (
    <div>
      <Header />
      <NavMenu
        userType={userType}
        signOut={handleLogout}
        handleCurrentPage={handleCurrentPage}
        handleService={handleService}
        userName={userName}
      />
      {currentPage === PAGES.HOME && (
        <Home handleService={handleService} handlePage={handleCurrentPage} />
      )}
      {currentPage === PAGES.SHEDULE && <SheduleTurn />}
      {currentPage === PAGES.TURN && <YourTurn />}
      {currentPage === PAGES.CANCEL && <CancelTurn />}
      {currentPage === PAGES.NOTIFICATIONS && <Notifications />}
    </div>
  ) : (
    <InitialPage onStart={handleStart} />
  );
}

export default App;

