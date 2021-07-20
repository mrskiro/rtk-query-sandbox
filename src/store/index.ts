import * as ReduxToolkit from "@reduxjs/toolkit"
import { rootReducer } from "~/store/reducer"

export const store = ReduxToolkit.configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
