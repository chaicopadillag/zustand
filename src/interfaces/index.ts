export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

export interface AuthPrivate {
  ok: boolean;
  message: string;
  user: User;
  userEmail: string;
  rawHeaders: string[];
  headers: Headers;
}

export interface Headers {
  authorization: string;
  'user-agent': string;
  accept: string;
  'postman-token': string;
  host: string;
  'accept-encoding': string;
  connection: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
}
