import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Keycloak from "keycloak-js";

import "./App.css";
import NavMenu from "./components/gestion-turnos/NavMenu";
import Header from "./components/gestion-turnos/Header";
import Home from "./components/gestion-turnos/Home";
import InitialPage from "./components/gestion-turnos/InitialPage";
import SheduleTurn from "./components/gestion-turnos/SheduleTurn";
import YourTurn from "./components/gestion-turnos/YourTurn";
import CancelTurn from "./components/gestion-turnos/CancelTurn";
import Notifications from "./components/gestion-turnos/Notifications";
import { USER_TYPE } from "./constants/constants";

function App() {
  const [keycloak, setKeycloak] = useState(null);
  const [userType, setUserType] = useState(USER_TYPE.USER); // Inicialmente asumimos que es un usuario normal
  const [started, setStarted] = useState(false);
  const [currentService, setCurrentService] = useState("");
  const [userName, setUserName] = useState("Pilar");

  useEffect(() => {
    const keycloakInstance = new Keycloak({
      url: "http://localhost:8090",
      realm: "TurnsManagementApp",
      clientId: "frontend",
    });
    setKeycloak(keycloakInstance);
  }, []);

  // FUNCIONES PA QUITAR....F EN EL CHAT :(
  const handleStart = () => {
    setStarted(true);
    console.log("VAMOS QUE VAMOS");
  };
  const handleLogout = () => {
    setStarted(false);
    console.log("VEMOS");
  };

  // const handleLogout = () => {
  //   if (keycloak) {
  //     keycloak.logout();
  //     setStarted(false);
  //     setUserType(USER_TYPE.USER);
  //     setUserName('');
  //   }
  // };

  // const handleStart = () => {
  //   if (keycloak) {
  //     keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  //       if (authenticated) {
  //         setStarted(true);
  //         setUserType(
  //           keycloak.hasRealmRole('Administrator')
  //             ? USER_TYPE.ADMIN
  //             : USER_TYPE.USER
  //         );
  //         setUserName(keycloak.tokenParsed.preferred_username);
  //       }
  //     });
  //   }
  // };

  const handleService = (service) => {
    setCurrentService(service);
  };

  return (
    <div>
      <Router>
        {started && (
          <>
            <Header />
            <NavMenu
              userType={userType}
              signOut={handleLogout}
              handleService={handleService}
              userName={userName}
            />
          </>
        )}
        <Routes>
          <Route
            path="/home"
            element={<Home handleService={handleService} />}
          />
          <Route path="/shedule" element={<SheduleTurn />} />
          <Route path="/your-turn" element={<YourTurn />} />
          <Route path="/cancel-turn" element={<CancelTurn />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/" element={<InitialPage onStart={handleStart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
