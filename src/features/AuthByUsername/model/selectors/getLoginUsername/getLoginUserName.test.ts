
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"


describe('getLoginUserName.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'ababa'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('ababa');
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  })
})