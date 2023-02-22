
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Navbar.module.scss'
import { ThemeButton } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
  className?: string
}


export const Navbar = ({className}: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
    
      <Button 
        theme={ThemeButton.CLEAR_INVERTED} 
        className={cls.links}
        onClick={onToggleModal}
        >
        {t( 'Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo facere minus in perspiciatis, vitae dignissimos molestiae dolore aliquam qui placeat quaerat? Corporis blanditiis officiis, consequuntur deleniti sapiente in sunt. Illum.
        Magni iure numquam, nihil voluptatem quisquam tempora voluptas? Ratione eveniet, quo necessitatibus aliquam asperiores, rerum dolorem, consequatur ullam itaque velit voluptas nihil? Non illo voluptatum molestias, consequuntur magnam eveniet laborum.
        Magni magnam atque vitae neque illum explicabo labore eaque praesentium laborum distinctio tempora nobis consequatur facere optio, ad cupiditate expedita aspernatur corporis laboriosam dolorum alias numquam. Laudantium eum atque temporibus?
        Officiis corporis expedita maxime sint omnis facere doloremque voluptatibus, totam pariatur nihil autem, repudiandae ratione commodi at culpa neque, similique hic in ipsum quisquam. Quaerat ullam magnam unde voluptatibus delectus?
      </Modal>
    </div>
  )
}

