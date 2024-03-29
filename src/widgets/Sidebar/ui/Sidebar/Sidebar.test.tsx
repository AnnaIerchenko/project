import {fireEvent, render, screen} from '@testing-library/react'
import { componentsRender } from 'shared/lib/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'


describe('Sidebar', () => {
  test('with only first param', () => {
    // const SidebarWithTranslation = withTranslation()(Sidebar)
    // render(<SidebarWithTranslation />)
    componentsRender(<Sidebar />)
    // render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    componentsRender(<Sidebar />)
    // render(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
