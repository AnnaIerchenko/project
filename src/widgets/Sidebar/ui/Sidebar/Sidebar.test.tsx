import {fireEvent, render, screen} from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
// import { withTranslation } from 'react-i18next'
import { Sidebar } from './Sidebar'


describe('Sidebar', () => {
  test('with only first param', () => {
    // const SidebarWithTranslation = withTranslation()(Sidebar)
    // render(<SidebarWithTranslation />)
    // renderWithTranslation(<Sidebar />)
    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    // renderWithTranslation(<Sidebar />)
    render(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
