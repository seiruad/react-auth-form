import { useInputs } from "./useInputs"
import { useSubmit } from "./useSubmit"
import { useValidator } from "./useValidator"


export const useAuthForm = (Validator) => {
  const [values, handleInput] = useInputs()
  const hookSubmit = useSubmit()
  const hookValidator = useValidator(Validator)

  const { messages, schedules } = hookValidator

  const handleChange = e => {
    hookValidator.updateError(values, e)
    handleInput(e)

  }

  const submitForm = (e) => {
    e.preventDefault()
    const isValid = hookValidator.validate(values)
    if (isValid) {
      hookSubmit.handleSubmit(e)
    }
  }

  const handleBlur = (e) => {
    // not implemented
  }


  return { 
    values, messages, schedules,
    handleChange, submitForm, handleBlur 
  }
}