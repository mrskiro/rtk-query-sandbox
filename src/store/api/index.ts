import * as RTKQuery from "@reduxjs/toolkit/query/react"
import * as Entity from "~/entity"

const endPoint = "https://pokeapi.co/api/v2/"

const pokemonAPI = RTKQuery.createApi({
  reducerPath: "pokemonApi",
  baseQuery: RTKQuery.fetchBaseQuery({ baseUrl: endPoint }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokemonsToLimit: builder.query<Entity.Pokemon[], { limit: number }>({
      async queryFn(args, _queryApi, _extraOptions, fetchWithBQ) {
        const _pokemons: any = await fetchWithBQ(`pokemon/?limit=${args.limit}`)
        const result = _pokemons.data.results as any[]
        const data = [] as Entity.Pokemon[]
        for (const p of result) {
          const d = await fetchWithBQ(`pokemon/${p.name}`)
          data.push(d.data as Entity.Pokemon)
        }
        return { data }
      },
    }),
  }),
})

export const {
  reducer,
  reducerPath,
  middleware,
  useGetPokemonByNameQuery,
  useGetPokemonsToLimitQuery,
} = pokemonAPI
