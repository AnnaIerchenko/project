import './styles/index.scss'

import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { lazy, useContext, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
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