import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Pokemons from "~/store/entities/pokemons"

export const reducer = ReduxToolkit.combineReducers({
  pokemons: Pokemons.reducer,
})
