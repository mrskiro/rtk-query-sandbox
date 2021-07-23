import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Api from "~/store/api"
import * as Entities from "~/store/entities"

export const rootReducer = ReduxToolkit.combineReducers({
  entities: Entities.reducer,
  [Api.reducerPath]: Api.reducer,
})
