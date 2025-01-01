import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

const tesloApi = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// interceptors

tesloApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().authUser?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { tesloApi };
