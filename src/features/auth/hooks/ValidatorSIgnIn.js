import { ondelete } from "../constants/validator"

const isEmpty = (obj) => {
  if (Object.keys(obj).length === 0) return true
  else return false
}


export const ValidatorSignIn = {
  fields : ['login', 'password'],
  messageInvalid: 'логин или пароль ведены неверно',
  
  validate: function (values) {
    let messages = {}
    let schedules = {}

    // checking if there are some empty fields
    // if so - set message for that field
    for (const f of this.fields) {
      if (!values[f]) messages[f] = 'поле не может быть пустым' 
    }
    
    if (isEmpty(messages)) {
      if (!/^(?!\.)(?!\-)[\w0-9\.\@\-\#\$]{3,128}(?<!\-)$/i.test(values.login)
       || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,128}$/.test(values.password)) { 
        messages.login = this.messageInvalid
        messages.password = this.messageInvalid 

        schedules.login = ondelete.DELETE_ALL
        schedules.password = ondelete.DELETE_ALL
      } 
    }

    return {messages, schedules, isValid: isEmpty(messages)}
  }
}

