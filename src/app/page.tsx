"use client"
import { useEffect, useState } from 'react';
import { FormLogin } from '../../devlink/FormLogin'

export default function Home() {

  const [disabledButton, setDisabledButton] = useState(false);
  const [vsibility, setVisibility] = useState(false);
  const [vsibilityForm, setVisibilityForm] = useState(false);

  function disabledEmailField(disabled: boolean) {
    setDisabledButton(disabled)
    setVisibility(disabled)
    setVisibilityForm(disabled)
  }

  useEffect(() => {
    disabledEmailField(true)
  }, []);

  return (
    <>
     <FormLogin
     disabledEmailField={disabledButton}
     visibilidade={vsibility}
     visibilidadeDoForm={vsibilityForm}
     />
    </>
   
  )
}
