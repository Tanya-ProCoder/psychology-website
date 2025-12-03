import axios from 'axios';

const API_BASE_URL = 'http://localhost/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const appointmentAPI = {
  create: (appointmentData) => api.post('/appointments', appointmentData),
  health: () => api.get('/health'),
};

export default api;