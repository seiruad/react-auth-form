import { useState } from "react"
import { ondelete } from "../constants/validator"


export const useValidator = (Validator) => {
  const [schedules, setSchedules] = useState({})
  const [isError, setIsError] = useState(false)
  const [messages, setMessages] = useState({})

  const validate = (values, e=null) => {
    if (e) values[e.target.name] = e.target.value
    const {messages, schedules, isValid} = Validator.validate(values)

    setMessages(messages)
    setSchedules(schedules)
    
    return isValid
  }

  const updateError = (e) => {
    // 
    const name = e.target.name
    if (!schedules[name] || schedules[name] === ondelete.DELETE_CURRENT) setMessages({...messages, [name]: ''}) 
    else if (schedules[name] === ondelete.DELETE_ALL) setMessages({})

  }



  const error = {messages, schedules}
  return [error, validate, updateError]
}