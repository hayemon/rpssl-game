import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ActionType from 'types/ActionType'
import Choice from 'types/Choice'
import PlayResult from 'types/PlayResult'

export const rpsslApi = createApi({
  reducerPath: 'rpsslApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://codechallenge.boohma.com/',
    fetchFn: fetch,
  }),
  endpoints: (builder) => ({
    getChoices: builder.query<Choice[], void>({
      query: () => `choices`,
    }),
    getChoice: builder.query<Choice, ActionType | undefined>({
      query: () => 'choice',
    }),
    play: builder.mutation<PlayResult, number>({
      query: (id) => ({
        url: 'play',
        method: 'POST',
        body: {
          player: id,
        },
      }),
    }),
  }),
})

export const { useGetChoicesQuery, useGetChoiceQuery, usePlayMutation } =
  rpsslApi
