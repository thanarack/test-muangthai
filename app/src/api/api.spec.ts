export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role: 'USER';
}

export interface Login {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export interface LoginResponse {
  data: Login;
}

export interface Register {
  id: string;
}

export interface RegisterResponse {
  data: RegisterRequest & Register;
}

export interface Organization {
  id: string;
  name: string;
}

export interface OrganizationsResponse {
  data: Organization[];
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
  doctorType: DoctorType;
}

export interface DoctorType {
  id: string;
  name: string;
}

export interface VoteUser {
  id: string;
  voteId: string;
  userId: string;
  created_at?: string;
  updated_at?: string;
}

export interface DoctorsResponse {
  data: User[];
}

export interface VoteUserResponse {
  data: VoteUser;
}

export interface VoteDeleteResponse {
  data: VoteItem;
}

export interface VoteAddResponse {
  data: VoteItem;
}

export interface VoteSubmitRequest {
  voteId: string;
}

export interface VoteRemoveRequest {
  voteId: string;
}

export interface VoteAddRequest {
  title: string;
  description: string;
  photoUrl: string;
}

export interface VoteUpdateRequest extends VoteAddRequest {
  id: string;
}

export interface VoteListRequest {
  search?: string;
  sort: number;
}

export interface VoteItem {
  id: string;
  title: string;
  description: string;
  voteNumber: number;
  photoUrl: string;
}

export interface VoteListResponse {
  data: VoteItem[];
}
