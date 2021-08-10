// react imports
import React from 'react';

// style and assets imports
import styles from './templates.module.scss';
import { EmailIcon } from '../../assets/EmailBlack.component';
import { LockIcon } from '../../assets/LockBlack.component';

// hooks and side-apps imports
import { useAuthForm } from '../../hooks/useAuthForm';
import { ValidatorSignUp } from 'features/auth/side-apps/ValidatorSignUp';

// component imports
import { Form } from '../elements/Form/Form.component';
import { FormInputGroup } from '../blocks/FormInputGroup/FormInputGroup.component';
import { FormButton } from '../elements/FormButton/FormButton.component';
import { useAuth } from 'features/auth/hooks/useAuth';
import { FormText } from '../elements/FormText/FormText.component';



export function RegisterForm() {
  // const [data, handleChange, submitForm, handleBlur] = useAuthForm(ValidatorSignUp)
  const authForm = useAuthForm(ValidatorSignUp)
  const { setCurrentForm } = useAuth()

  const handleLinkClick = e => {
    e.preventDefault()
    setCurrentForm('login')
  }


  return (
    <div className={styles.container}>
      <Form handleSubmit={(e) => authForm.submitForm(e)}>
        <h1 class={styles.form__title}>Создать</h1>
        <FormInputGroup 
          name='login'
          type='text' 
          value={authForm.values.login}
          placeholder={'Введите адрес почты'}
          errorMessage={authForm.messages?.login}
          handleChange={(e) => authForm.handleChange(e)}
          handleBlur={(e) => authForm.handleBlur(e)}
          icon={<EmailIcon />}
        />
        <FormInputGroup 
          name='password'
          type='password' 
          value={authForm.values.password}
          placeholder={'Введите пароль'}
          errorMessage={authForm.messages?.password}
          handleChange={(e) => authForm.handleChange(e)}
          handleBlur={(e) => authForm.handleBlur(e)}
          icon={<LockIcon />}
        />
        <FormInputGroup 
          name='passwordConfirm'
          type='password' 
          value={authForm.values.passwordConfirm}
          placeholder={'Введите пароль еще раз'}
          errorMessage={authForm.messages?.passwordConfirm}
          handleChange={(e) => authForm.handleChange(e)}
          handleBlur={(e) => authForm.handleBlur(e)}
          icon={<LockIcon />}
        />
        <FormButton>Продолжить</FormButton>
        <FormText 
          text={'Есть аккаунт?'}
          linkText={'Войдите!'}
          onClick={handleLinkClick}
        >Есть аккаунт? Войдите!</FormText>
      </Form>
    </div>
  );
}
