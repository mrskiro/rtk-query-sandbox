import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Entity from "~/entity"
import * as PokemonsOperations from "~/store/entities/pokemons/operations"

export const pokemonsAdapter = ReduxToolkit.createEntityAdapter<Entity.Pokemon>(
  {
    selectId: (pokemon) => pokemon.id,
  }
)

type loading = "idle" | "pending"

const slice = ReduxToolkit.createSlice({
  name: "pokemons",
  initialState: pokemonsAdapter.getInitialState<{
    loading: loading
    error: any | null | undefined
  }>({
    loading: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      PokemonsOperations.getPokemonsToLimit.pending,
      (state, action) => {
        state.loading = "pending"
      }
    )
    builder.addCase(
      PokemonsOperations.getPokemonsToLimit.fulfilled,
      (state, action) => {
        state.loading = "idle"
        pokemonsAdapter.setAll(state, action.payload)
      }
    )
    builder.addCase(
      PokemonsOperations.getPokemonsToLimit.rejected,
      (state, action) => {
        state.error = action.error
      }
    )
  },
})

export const { actions, reducer } = slice
