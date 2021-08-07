import styles from './FormButton.module.scss'


export function FormButton (props) {
  return (
    <>
      <button 
        type={props.type}
        className={styles.form__button}
        onClick={props.handleClick}
        className={styles.form__button}
        > {props.children}
      </button>
    </>
  )
}