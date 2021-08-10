import { useState } from "react"


export const useInputs = () => {
  const [values, setValues] = useState({})

  const handleInput = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (value) value = value.trim()
    setValues({...values, [name]: value})
  }
  
  // const handleInput = handleChange
  return [values, handleInput]
}