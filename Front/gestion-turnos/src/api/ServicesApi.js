import { SERVICES_BACK } from '../constants/constants';

const SERVICE_API_URL = 'http://localhost:8082/api/turn/services';
export const fetchServiceInfo = async (serviceType) => {
    try {
      const response = await fetch(`${SERVICES_BACK.SERVICES_SERVICE}/${serviceType}`);
      if (!response.ok) {
        throw new Error('Service not found');
      }
      console.log("Se logró")
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching service info:', error);
      throw error;
    }
  };