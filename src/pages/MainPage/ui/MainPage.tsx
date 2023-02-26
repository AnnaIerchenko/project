import { BugButton } from 'app/providers/ErrorBoudary'
import { Counter } from 'entities/Counter'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {

  const {t} = useTranslation()
  return (
    <div>
      {/* <BugButton /> */}
      {t('Главная страница')}
      <h1>helloooooo</h1>
   
    </div>
  )
}

export default MainPage