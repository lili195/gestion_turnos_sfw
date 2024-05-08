import { useState, useEffect } from 'react';
import './App.css';
import NavMenu from './components/gestion-turnos/NavMenu';
import Header from './components/gestion-turnos/Header';
import Home from './components/gestion-turnos/Home';
import InitialPage from './components/gestion-turnos/InitialPage';
import { PAGES, SERVICES, USER_TYPE } from './constants/constants';
import SheduleTurn from './components/gestion-turnos/SheduleTurn';
import YourTurn from './components/gestion-turnos/YourTurn';
import CancelTurn from './components/gestion-turnos/CancelTurn';
import Notifications from './components/gestion-turnos/Notifications';

function App() {
  const [userType, setUserType] = useState(USER_TYPE.USER);
  const [started, setStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState(PAGES.INITIAL);
  const [currentService, setCurrentService] = useState('');
  const [userName, setUserName] = useState('Pilar');

  useEffect(() => {
    setStarted(false);
  }, []);

  const handleStart = () => {
    setStarted(!started);
  };
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };
  const handleService = (service) => {
    setCurrentService(service);
  };

  console.log('currentPage: ', currentPage);
  console.log('service: ', currentService);
  console.log('userType: ', userType);

  return started ? (
    <div>
      <Header />
      <NavMenu
        userType={userType}
        signOut={handleStart}
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
    <InitialPage
      onStart={() => {
        handleStart();
        handleCurrentPage(PAGES.HOME);
      }}
    />
  );
}

export default App;
