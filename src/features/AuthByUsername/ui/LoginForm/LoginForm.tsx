import { loginActions } from "../../model/slice/loginSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import cls from './LoginForm.module.scss'
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text } from "shared/ui/Text/Text";
import { TextTheme } from "shared/ui/Text/Text"; 

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {

  const {t} = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading} = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

const onLoginClick = useCallback(() => {
  dispatch(loginByUsername({username, password}))
}, [dispatch, username, password])

  return (
    <div
       className={classNames(cls.LoginForm, {}, [className])}
    >
      <Text title="Форма авторизации"/>
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input 
        autoFocus
        type="text" 
        className={cls.input}
        placeholder='Введите username'
        onChange={onChangeUsername}
        value={username}
      />
      <Input 
        type="text" 
        className={cls.input}
        placeholder='Введите пароль'
        onChange={onChangePassword}
        value={password}
      />
      <Button  
        className={cls.loginBtn}
        theme={ThemeButton.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})