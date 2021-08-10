import { useState } from "react"
import {  ONDELETE_MESSAGE } from "../feature-config/constants"


export const useValidator = (Validator) => {
  const [schedules, setSchedules] = useState({})
  // const [isError, setIsError] = useState(false)
  const [messages, setMessages] = useState({})
  
  const validateOnly = (name, values) => {
    const report = Validator.validateOnly(name, values)
    setMessages({...messages,  ...report.messages})
    setSchedules({...schedules, ...report.schedules})
    
    return report.isValid
  }
  const validate = (values, e=null) => {
    if (e) values[e.target.name] = e.target.value
    const {messages, schedules, isValid} = Validator.validate(values)

    setMessages(messages)
    setSchedules(schedules)
    
    return isValid
  }

  const updateError = (values, e) => {
    const name = e.target.name
    // const value = e.target.value
    
    if (!schedules[name] || schedules[name] === ONDELETE_MESSAGE.DELETE_CURRENT) setMessages({...messages, [name]: ''})
    else if (schedules[name] === ONDELETE_MESSAGE.DELETE_ALL) setMessages({})
    else if (schedules[name] === ONDELETE_MESSAGE.DELETE_PASSWORDS) { 
      setMessages({...messages, password: '', passwordConfirm: ''})
    }

  }



  // const error = {messages, schedules}
  // const hookValidator = {messages, schedules}
  return {messages, schedules, validate, validateOnly, updateError}
}