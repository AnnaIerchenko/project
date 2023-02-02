import './styles/index.scss'
import Counter from './components/Counter'
import { Route, Routes } from 'react-router-dom'
// import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import { Link } from 'react-router-dom'
import { lazy, useContext, useState } from 'react'
import AboutPage from './pages/AboutPage/AboutPage'
import { ThemeContext , Theme} from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'
// const AboutPage = lazy(() => import ('./pages/AboutPage'))


const App = () => {

const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
     <Routes>
      <Route path={'/about'} element={<AboutPage />}/>
      <Route path={'/'} element={<MainPage />}/>
     </Routes>
      
    </div>
  )
}

export default App