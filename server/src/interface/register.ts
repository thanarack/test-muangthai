import { Role } from './role';

export interface RegisterBody {
  email: string;
  password: string;
  name: string;
  role: Role;
}
