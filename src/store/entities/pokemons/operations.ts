import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Store from "~/store"

export const getPokemonsToLimit = ReduxToolkit.createAsyncThunk<
  any,
  { limit: number },
  Store.AsyncThunkConfig
>("pokemons/getPokemonsToLimit", async (arg, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.getPokemonsToLimit(arg.limit)
    return response
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})
