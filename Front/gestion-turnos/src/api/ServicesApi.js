import { SERVICES_BACK } from '../constants/constants';

// export const fetchServiceInfo = async (serviceType) => {
//     try {
//         const response = await fetch(`${SERVICES_BACK.SERVICES_INFO}/${serviceType}`);
//         if (!response.ok) {
//             throw new Error('Service not found PILAR');
//         }
//         const data = response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching service info:', error);
//         throw error;
//     }
// };

export const fetchServiceInfo = (serviceType) => {
    fetch(`${SERVICES_BACK.SERVICES_INFO}/${serviceType}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }
        return response.json(); // o response.text() dependiendo del tipo de respuesta esperada
    })
    .then(data => {
        console.log('Datos recibidos:', data);
        return data;
        // Procesa los datos como necesites.
    })
    .catch(error => {
        console.error('Hubo un problema con el fetch:', error);
    });
}

export const checkUserShiftByDate = async (user, date) => {
    const response = await fetch(`${SERVICES_BACK.CHECK_SHIFT}/user/${user}/date/${date}`);
    if (!response.ok) {
        throw new Error("Failed to check user turn by date");
    }
    return response.json();
};

export const checkShiftAvailability = async (date, time, service) => {
    const response = await fetch(`${SERVICES_BACK.CHECK_SHIFT}/${date}/${time}/${service}`);
    if (!response.ok) {
      throw new Error("Failed to check turn availability");
    }
    return response.json();
};

export const createShift = async (shift) => {
    const response = await fetch(SERVICES_BACK.CREATE_SHIFT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(shift),
    });
    if (!response.ok) {
      throw new Error("Failed to create turn");
    }
    return response.json();
};