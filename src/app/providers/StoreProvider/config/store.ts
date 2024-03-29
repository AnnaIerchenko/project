import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import {CombinedState, Reducer} from "redux"
import { userReducer } from "entities/User";
import { NavigateOptions, To } from "react-router";
import { $api } from "shared/api/api";
// import { loginReducer } from "features/AuthByUsername";
import { createReducerManager } from "./reducerManager";
import { StateSchema, ThunkExtraArg } from "./StateSchema";

export function createReduxStore(
  initialState?: StateSchema, 
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
  ) {
  
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    // loginForm: loginReducer
  }

  const reducerManager = createReducerManager(rootReducers)
  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate
  }
  
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      }
    })
  })

  //@ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

