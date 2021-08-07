import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { FormInputGroup } from './blocks/FormInputGroup/FormInputGroup.component';
import { Form } from './elements/Form/Form.component';
import { FormButton } from './elements/FormButton/FormButton.component';
import { useInputs } from './hooks/useInputs';

import PasswordIcon from 'shared/assets/lock_black_24dp.svg';
import LoginIcon from 'shared/assets/email_black_24dp.svg'
import { EmailIcon } from './assets/EmailBlack.component';
import { LockIcon } from './assets/LockBlack.component';
import { useAuthForm } from './hooks/useAuthForm';
import { ValidatorSignIn } from './hooks/ValidatorSIgnIn';

export function Auth() {
  const [data, handleChange, submitForm] = useAuthForm(ValidatorSignIn)
  const { values, error } = data

  return (
    <div className={styles.container}>
      <Form handleSubmit={(e) => submitForm(e)}>
        <h1 class={styles.form__title}>Войти</h1>
        <FormInputGroup 
          name='login'
          type='text' 
          value={values.login}
          placeholder={'Введите адрес почты'}
          errorMessage={error.messages?.login}
          handleChange={(e) => handleChange(e)}
          icon={<EmailIcon />}
        />
        <FormInputGroup 
          name='password'
          type='password' 
          value={values.password}
          placeholder={'Введите пароль'}
          errorMessage={error.messages?.password}
          handleChange={(e) => handleChange(e)}
          icon={<LockIcon />}
        />
        <FormButton>Продолжить</FormButton>
      </Form>
    </div>
  );
}
