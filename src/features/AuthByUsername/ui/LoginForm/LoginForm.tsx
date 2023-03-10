import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector, useStore } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import cls from './LoginForm.module.scss'

import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text } from "shared/ui/Text/Text";
import { TextTheme } from "shared/ui/Text/Text"; 

import { getLoginUserName } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {

  const {t} = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUserName)
  const password = useSelector(getLoginPassword)  
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

 
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

const onLoginClick = useCallback(async() => {
 const result = await dispatch(loginByUsername({username, password}))
 if(result.meta.requestStatus === 'fulfilled'){
  onSuccess()
 }
}, [onSuccess, dispatch, username, password])

  return (
    <DynamicModuleLoader 
      removeAfterUnmount={true} 
      reducers={initialReducers}
    >
    <div
       className={classNames(cls.LoginForm, {}, [className])}
    >
      <Text title="?????????? ??????????????????????"/>
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input 
        autoFocus
        type="text" 
        className={cls.input}
        placeholder='?????????????? username'
        onChange={onChangeUsername}
        value={username}
      />
      <Input 
        type="text" 
        className={cls.input}
        placeholder='?????????????? ????????????'
        onChange={onChangePassword}
        value={password}
      />
      <Button  
        className={cls.loginBtn}
        theme={ThemeButton.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('??????????')}
      </Button>
    </div>
    </DynamicModuleLoader> 
  )
})

export default LoginForm