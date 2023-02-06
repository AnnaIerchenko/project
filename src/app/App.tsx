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
import { useTranslation } from 'react-i18next'

// const AboutPage = lazy(() => import ('./pages/AboutPage'))
// const Component = () => {
//  const { t , i18n} = useTranslation() 

//  const toggle = () => {
//   i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
//  }

//  return  ( 
//   <div>
//     <button onClick={toggle}>{t('Перевод')}</button>
//     {t('Тестовый пример')}
//   </div>
//  )
// }

const App = () => {

  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">

        <Navbar />
        
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

  
      
    </div>
  )
}

export default App