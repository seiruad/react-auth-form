import { useHistory } from "react-router-dom"


export const useSubmit = () => {
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    history.push('/page-success')
  }
  
  return { handleSubmit }
}