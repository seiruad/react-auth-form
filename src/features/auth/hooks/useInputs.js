import { useState } from "react"


export const useInputs = () => {
  const [values, setValues] = useState({})

  const handleInput = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  
  // const handleInput = handleChange
  return [values, handleInput]
}