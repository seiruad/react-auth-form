import { useState } from "react"


export const useSubmit = (fetchFunction) => {
  const [status, setStatus] = useState('edit')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitted')
    alert('Submitted')
  }
  
  // const handleInput = handleChange
  return [status, handleSubmit]
}