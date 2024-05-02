// client-side code
import {
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "d1d2505357msh62fd871279bdda5p11a608jsn97aed46c430b",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
}

const baseUrl = "https://coinranking1.p.rapidapi.com/"

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders })
export const cryptoApi = createApi({
  reducerPath: "crypto",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId): string | FetchArgs => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }): string | FetchArgs =>
        createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi
