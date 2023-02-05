import './styles/index.scss'

import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { lazy, Suspense, useContext, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'
// const AboutPage = lazy(() => import ('./pages/AboutPage'))


const App = () => {

const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
      
    </div>
  )
}

export default App