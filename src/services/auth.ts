import { retry } from '@reduxjs/toolkit/query/react';
import { api } from './api';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ token: string; user: User }, any>({
      query: (credentials: any) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      extraOptions: {
        backoff: () => {
          // We intentionally error once on login, and this breaks out of retrying.
          // The next login attempt will succeed.
          retry.fail({ fake: 'error' });
        },
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;

export const {
  endpoints: { login },
} = authApi;
