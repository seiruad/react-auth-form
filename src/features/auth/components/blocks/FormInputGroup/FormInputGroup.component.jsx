import styles from './FormInputGroup.module.scss';

export function FormInputGroup (props) {

  return (
    <div className={styles.form__input_group}>
        <span
          className={`${styles.form__icon}`} 
          >{props.icon}</span>
        <input 
          name={props.name}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          autoComplete='off'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          className={`${styles.form__input} ${props.errorMessage && styles.form__input__error}` }
          {...props}
        />

      <div className={styles.form__input_message}>{props.errorMessage !== '_' && props.errorMessage}</div>
    </div>
  )
}