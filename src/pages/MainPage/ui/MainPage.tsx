import { BugButton } from 'app/providers/ErrorBoudary'
import { Counter } from 'entities/Counter'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {

  const {t} = useTranslation()

  const [value, setValue] = useState('')
  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <div>
      {/* <BugButton /> */}
      {t('Главная страница')}
      <h1>helloooooo</h1>
      <Input 
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default MainPage