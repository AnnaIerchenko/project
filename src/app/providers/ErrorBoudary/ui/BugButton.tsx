

import { useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";


interface BugButtonProps {
  className?: string
}

//component for test ErrorBOundary
export const BugButton = ({}: BugButtonProps)=>{
 
  const [error, setError] = useState(false)
  const onThrow = () => setError(true)

  useEffect(() => {
    if(error){

      throw new Error()
    }
  }, [error])

  return (
    <Button onClick={onThrow}>
      throw error
    </Button>
  )
}