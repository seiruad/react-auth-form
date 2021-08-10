// react imports
import React from 'react';

// style and assets imports
import styles from './templates.module.scss';
import { EmailIcon } from '../../assets/EmailBlack.component';
import { LockIcon } from '../../assets/LockBlack.component';

// hooks and side-apps imports
import { useAuthForm } from '../../hooks/useAuthForm';
import { useAuth } from 'features/auth/hooks/useAuth';
import { ValidatorSignIn } from 'features/auth/side-apps/ValidatorSIgnIn';

// component imports
import { Form } from '../elements/Form/Form.component';
import { FormInputGroup } from '../blocks/FormInputGroup/FormInputGroup.component';
import { FormButton } from '../elements/FormButton/FormButton.component';
import { FormText } from '../elements/FormText/FormText.component';




export function LoginForm() {
  const authForm = useAuthForm(ValidatorSignIn)
  const { setCurrentForm } = useAuth()

  const handleLinkClick = e => {
    e.preventDefault()
    setCurrentForm('register')
  }


  return (
    <div className={styles.container}>
      <Form handleSubmit={(e) => authForm.submitForm(e)}>
        <h1 class={styles.form__title}>Войти</h1>
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
        <FormButton>Продолжить</FormButton>
        <FormText 
          text={'Нет аккаунта?'}
          linkText={'Создайте!'}
          onClick={handleLinkClick}
        ></FormText>
      </Form>
    </div>
  );
}
