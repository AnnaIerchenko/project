import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { CombinedState } from "redux";
import { AxiosInstance } from "axios";
import { NavigateOptions } from "react-router";
import { To } from 'history';
import { ArticleDetailsSchema } from "entities/Article";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  //async reducers
  loginForm?: LoginSchema; 
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema
// const keyFromState: StateSchemaKey = ''

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg;
  state: StateSchema;
  // dispatch?: Dispatch;
}