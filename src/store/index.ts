import * as ReduxToolkit from "@reduxjs/toolkit";

export const store = ReduxToolkit.configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
