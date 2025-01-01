import { tesloApi } from '@/api/teslo.api';
import { AuthPrivate, AuthUser } from '@/interfaces';
import { AxiosError } from 'axios';

export class AuthService {
  static async login(email: string, password: string) {
    try {
      const { data } = await tesloApi.post<AuthUser>('/auth/login', { email, password });
      return data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  static async getAuthUser() {
    try {
      const { data } = await tesloApi.get<AuthUser>('/auth/check-status');
      return data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  static async authPrivate() {
    try {
      const { data } = await tesloApi.get<AuthPrivate>('/auth/private');
      return data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  static handleAxiosError(error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        throw new Error('Invalid credentials');
      }
    }
    throw new Error('An error occurred');
  }
}
