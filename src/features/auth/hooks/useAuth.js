import { useSelector, useDispatch } from 'react-redux'
import { switchForm } from '../feature-config/authSlice'

export const useAuth = () => {
  const currentForm = useSelector((state) => state.auth.currentForm)
  const dispatch = useDispatch()

  const setCurrentForm = (name) => {
    dispatch(switchForm(name))
  }

  return { setCurrentForm, currentForm }
}
