
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
const {
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autoFocus,
  readonly,
  ...otherProps
} = props

const ref = useRef<HTMLInputElement>(null)
const [isFocused, setIsFocused] = useState(false)

useEffect(() => {
  if(autoFocus){
    setIsFocused(true)
    ref.current?.focus()
  }
}, [autoFocus])

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  onChange?.(e.target.value)
}

const mods: Mods = {
  [cls.readonly]: readonly,
}
  return (
    <div
       className={classNames(cls.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={cls.placeholder}>
            {`${placeholder}`}
          </div>
        )}
        <input 
          ref={ref}
          type={type}
          value={value} 
          onChange={onChangeHandler} 
          className={cls.input}
          readOnly={readonly}
          {...otherProps}
        />
    </div>
  )
})