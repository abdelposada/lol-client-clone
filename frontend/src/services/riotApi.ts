import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'RGAPI-74c893bc-a46d-4caa-a97b-8670ca74beca';
export const RIOT_API_REDUCER_KEY = 'riotApi';

export const riotLoLApi = createApi({
  reducerPath: RIOT_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://la1.api.riotgames.com/lol/', //lol/summoner/v4/summoners/by-name/Tatsumaki
    prepareHeaders(headers) {
      headers.set('X-Riot-Token', API_KEY);
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getSummonerByName: builder.query<ISummoner, string>({
        query(username) {
          return `summoner/v4/summoners/by-name/${username}`;
        },
      }),
    };
  },
});

export const { useGetSummonerByNameQuery } = riotLoLApi;

export interface ISummoner {
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
}
