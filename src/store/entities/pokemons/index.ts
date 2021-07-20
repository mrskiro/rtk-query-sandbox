import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Entity from "~/entity"

export const pokemonsAdapter = ReduxToolkit.createEntityAdapter<Entity.Pokemon>(
  {
    selectId: (pokemon) => pokemon.id,
  }
)

const slice = ReduxToolkit.createSlice({
  name: "pokemons",
  initialState: pokemonsAdapter.getInitialState(),
  reducers: {},
})

export const { actions, reducer } = slice
