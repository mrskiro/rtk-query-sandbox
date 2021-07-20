// import * as ReduxToolkit from "@reduxjs/toolkit"
import { RootState } from "~/store"
import { pokemonsAdapter } from "~/store/entities/pokemons"

export const stateSelector = pokemonsAdapter.getSelectors<RootState>(
  (state) => state.entities.pokemons
)
