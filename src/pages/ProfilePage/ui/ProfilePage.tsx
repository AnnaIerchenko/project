import { classNames } from "shared/lib/classNames/classNames";
// import cls from './ProfilePage.module.scss'
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProfileData, getProfileForm, getProfileReadonly, profileActions, ProfileCard, profileReducer } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { TextTheme } from "shared/ui/Text/Text";
import { Text } from "shared/ui/Text/Text";
import { ValidateProfileError} from "entities/Profile/model/types/profile";
import { getProfileValidateErrors } from "entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateError";

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
  const {t} = useTranslation('profile')
  const dispatch = useAppDispatch();
     const formData = useSelector(getProfileForm);
     const isLoading = useSelector(getProfileIsLoading);
     const error = useSelector(getProfileError);
     const readonly = useSelector(getProfileReadonly)
     const validateErrors = useSelector(getProfileValidateErrors);

     const validateErrorTranslates = {
      [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
      [ValidateProfileError.INCORRECT_COUNTRY]: t('Некоректный регион'),
      [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
      [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
      [ValidateProfileError.INCORRECT_AGE]: t('Некорекный возраст'),
     }

  useEffect(() => {
    if(__PROJECT__ !== 'storybook'){
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?:string) => {
    dispatch(profileActions.updateProfile({first: value || ''}))
  }, [dispatch])

  const onChangeLastname = useCallback((value?:string) => {
    dispatch(profileActions.updateProfile({lastname: value || ''}))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
}, [dispatch]);

const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
}, [dispatch]);

const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
}, [dispatch]);

const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
}, [dispatch]);

const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
}, [dispatch]);

const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
}, [dispatch]);

return (
  <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <div className={classNames('', {}, [className])}>
    <ProfilePageHeader />
    { validateErrors?.length && validateErrors.map((err) => (
      <Text 
        key={err}
        theme={TextTheme.ERROR} 
        text={validateErrorTranslates[err]} 
      />
    )) }
    <ProfileCard 
      data={formData}
      isLoading={isLoading}
      error={error}
      readonly={readonly}
      onChangeFirstname={onChangeFirstname}
      onChangeLastname={onChangeLastname}
      onChangeAge={onChangeAge}
      onChangeCity={onChangeCity}
      onChangeUsername={onChangeUsername}
      onChangeAvatar={onChangeAvatar}
      onChangeCurrency={onChangeCurrency}
      onChangeCountry={onChangeCountry}
    />
    </div>
  </DynamicModuleLoader>

)
}

export default ProfilePage