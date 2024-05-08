import { useState } from 'react';
import './App.css';
import NavMenu from './components/gestion-turnos/NavMenu';
import Header from './components/gestion-turnos/Header';
import Home from './components/gestion-turnos/Home';
import InitialPage from './components/gestion-turnos/InitialPage';

function App() {
  const [userType, setUserType] = useState('user');
  const [started, setStarted] = useState(false);
  const handleStart = () => {
    setStarted(!started);
  };

  return started ? (
    <div>
      <Header />
      <NavMenu userType={userType} signOut={handleStart}/>
      <Home />
    </div>
  ) : (
    <InitialPage onStart={handleStart}/>
  );
}

export default App;
