import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Entities from "~/store/entities"

export const rootReducer = ReduxToolkit.combineReducers({
  entities: Entities.reducer,
})
