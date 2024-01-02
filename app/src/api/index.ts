import api from '../util/api';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  VoteAddRequest,
  VoteAddResponse,
  VoteDeleteResponse,
  VoteListRequest,
  VoteListResponse,
  VoteRemoveRequest,
  VoteSubmitRequest,
  VoteUpdateRequest,
  VoteUserResponse,
} from './api.spec';

export const postLogin = (body: LoginRequest): Promise<LoginResponse> => {
  return api.post('/users/login', body);
};

export const postSignup = (
  body: RegisterRequest
): Promise<RegisterResponse> => {
  return api.post('/users/register', body);
};

export const getVoteList = (
  params: VoteListRequest
): Promise<VoteListResponse> => {
  return api.get('/vote/list', { params });
};

export const postVoteSubmit = (
  body: VoteSubmitRequest
): Promise<VoteUserResponse> => {
  return api.post('/vote/submit', body);
};

export const postVoteRemove = (
  body: VoteRemoveRequest
): Promise<VoteDeleteResponse> => {
  return api.delete('/vote/remove', {
    params: body,
  });
};

export const postVoteAdd = (body: VoteAddRequest): Promise<VoteAddResponse> => {
  return api.post('/vote/add', body);
};

export const postVoteUpdate = (
  body: VoteUpdateRequest
): Promise<VoteAddResponse> => {
  return api.patch('/vote/update', body);
};

export const PREFIX_DATA = 'data.data.data';
