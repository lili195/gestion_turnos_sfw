export const PAGES = {
  HOME: 'home',
  SHEDULE: 'shedule', //Schedule your turn (agenda tu turno)
  TURN: 'turn', // Tu turno
  CANCEL: 'cancel', // Cancela tu turno
  NOTIFICATIONS: 'notifications', // Alerta de turno
  INITIAL: 'initialPage',
};

export const SERVICES = {
  CONSULTAS: 'CONSULTAS',
  PAGOS: 'PAGOS',
  RECLAMOS: 'RECLAMOS',
};

export const USER_TYPE = {
  USER: 'user',
  ADMIN: 'admin',
};

export const SERVICES_BACK = {
  TOKEN_SERVICE: "http://localhost:8081/token/received",
  SERVICES_SERVICE: "http://localhost:8082/api/turn/services",
};

export const KEYCLOAK = {
  URL: "http://localhost:8090",
  REALM: "TurnsManagementApp",
  CLIENT_ID: "frontend",
  ROLE_ADMIN: "Administrator",
}
