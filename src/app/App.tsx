import './styles/index.scss'

import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { lazy, Suspense, useContext, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

// const AboutPage = lazy(() => import ('./pages/AboutPage'))


const App = () => {

  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>

  
      
    </div>
  )
}

export default App