import { api } from './api';

interface PlanResponse {
  planId: string;
}

export const planApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlan: build.query<PlanResponse, string>({
      query: (planId) => `plans/${planId}`,
      providesTags: ['Plan'],
    }),
  }),
});

export const { useGetPlanQuery } = planApi;
