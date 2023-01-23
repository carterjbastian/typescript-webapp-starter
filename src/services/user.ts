import { api } from './api';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ token: string }, { username: string; password: string }>({
      query: (credentials) => ({
        url: 'users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUser: build.query<{ username: string; email: string }, null>({
      query: () => ({
        url: 'users/',
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;

export const {
  endpoints: { login, getUser },
} = userApi;
