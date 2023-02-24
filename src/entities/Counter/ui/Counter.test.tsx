import { componentsRender } from "shared/lib/tests/componentRender/componentRender"
import { Counter } from "./Counter"
import { screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('test render', () => {
    componentsRender(<Counter />, {
      initialState: { counter: {value: 10 }}
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  });

  test('increment', () => {
    componentsRender(<Counter />, {
      initialState: { counter: {value: 10 }}
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  });

  test('decrement', () => {
    componentsRender(<Counter />, {
      initialState: { counter: {value: 10 }}
    })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  });

})