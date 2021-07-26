import * as ReduxToolkit from "@reduxjs/toolkit"
import { rootReducer } from "~/store/reducer"
import * as Api from "~/store/api"
import { extraArgument } from "~/api"

export const store = ReduxToolkit.configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(Api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

type ExtraArg = {
  api: typeof extraArgument.api
}

export type AsyncThunkConfig<T = unknown> = {
  state: RootState
  dispatch: AppDispatch
  extra: ExtraArg
  rejectValue: T
}
