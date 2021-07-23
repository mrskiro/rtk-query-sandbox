import * as ReduxToolkit from "@reduxjs/toolkit"
import { rootReducer } from "~/store/reducer"
import * as Api from "~/store/api"

export const store = ReduxToolkit.configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
