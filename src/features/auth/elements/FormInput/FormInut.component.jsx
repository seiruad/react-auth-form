import styles from './FormInput.module.scss'


export function FormInput (props) {
  return (
    <>
      <input 
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        autoComplete='off'
        onChange={props.handleChange} 
        className={styles.form__input}
        {...props} 
      />
    </>
  )
}