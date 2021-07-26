import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Store from "~/store"
import * as Pokemons from "~/store/entities/pokemons"

export const pokemonsSelector =
  Pokemons.pokemonsAdapter.getSelectors<Store.RootState>(
    (state) => state.entities.pokemons
  )

const stateSelector = (state: Store.RootState) => state.entities.pokemons

export const isLoading = ReduxToolkit.createSelector(
  stateSelector,
  (state) => state.loading === "pending"
)

export const isError = ReduxToolkit.createSelector(
  stateSelector,
  (state) => state.error !== null
)
