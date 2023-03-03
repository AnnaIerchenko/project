import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginUserName } from "./getLoginUserName"


describe('getLoginUserName.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'ababa'
      }
    }
    expect(getLoginUserName(state as StateSchema)).toEqual('ababa');
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUserName(state as StateSchema)).toEqual('');
  })
})