// import * as ReduxToolkit from "@reduxjs/toolkit"
import { RootState } from "~/store"

export const stateSelector = (state: RootState) => state.entities.pokemons
