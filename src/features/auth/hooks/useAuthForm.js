import { useEffect, useState } from "react"
import { useInputs } from "./useInputs"
import { useSubmit } from "./useSubmit"
import { useValidator } from "./useValidator"


export const useAuthForm = (Validator) => {
  const [values, handleInput] = useInputs()
  const [status, handleSubmit] = useSubmit(() => 'hey')
  const [error, validate, updateError] = useValidator(Validator)

  const handleChange = e => {
    updateError(e)
    handleInput(e)

  }

  const submitForm = (e) => {
    e.preventDefault()
    const isValid = validate(values)
    if (isValid) {
      handleSubmit(e)
    }
  }

  useEffect(() => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRRR')
    if (status === 'submitted') {
      // handleInput()
    }
  }, [status])

  const data = {values, error}
  return [data, handleChange, submitForm]
}