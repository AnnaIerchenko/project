import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
// import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
// import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Navbar.module.scss'
import { ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
// import { Modal } from 'shared/ui/Modal/Modal'


interface NavbarProps {
  className?: string
}


export const Navbar = memo(({className}: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
   dispatch(userActions.logout())
  }, [dispatch])


  if(authData) {
    return(
      <div className={classNames(cls.Navbar, {}, [className])}>
      <Button 
        theme={ThemeButton.CLEAR_INVERTED} 
        className={cls.links}
        onClick={onLogout}
      >
        {t( 'Выйти')}
      </Button>
    </div>
    )

  }
  

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
    
      <Button 
        theme={ThemeButton.CLEAR_INVERTED} 
        className={cls.links}
        onClick={onShowModal}
        >
        {t( 'Войти')}
      </Button>

      {isAuthModal && <LoginModal 
        isOpen= {isAuthModal}
        onClose = {onCloseModal}   
       />}
    </div>
  )
}
) 
