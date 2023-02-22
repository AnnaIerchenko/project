import { ReactNode } from "react";
import { createPortal } from "react-dom";


interface PortalProps {
  children?: ReactNode;//chto
  element?: HTMLElement; //kyda
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    element = document.body,
  } = props
  
  return createPortal(children, element)
}