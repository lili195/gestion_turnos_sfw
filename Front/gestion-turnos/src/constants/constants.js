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
  SERVICES_INFO: "http://localhost:8089/api/turn/services",
  CHECK_SHIFT: "http://localhost:8089/api/shifts",
  GET_SHIFTS: "http://localhost:8089/api/shifts/getShifts",
  CREATE_SHIFT: "http://localhost:8089/api/shifts/createShift",
  DELETE_SHIFT: "http://localhost:8089/api/shifts/delete",
};

export const KEYCLOAK = {
  URL: "http://localhost:8090",
  REALM: "TurnsManagementApp",
  CLIENT_ID: "turns-management-project",
  ROLE_ADMIN: "Administrator",
}
