import { useState } from 'react';
import { appointmentAPI } from '../services/api';

export const useAppointment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createAppointment = async (appointmentData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await appointmentAPI.create(appointmentData);
      setSuccess(true);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Произошла ошибка при отправке заявки';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createAppointment,
    loading,
    error,
    success,
    reset: () => {
      setError(null);
      setSuccess(false);
    }
  };
};