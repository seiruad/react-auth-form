import styles from './Form.module.scss';

export function Form (props) {

  return (
    <>
      <form 
        onSubmit={props.handleSubmit || ((e) => e.preventDefault())}
        className={styles.form}
        > {props.children} 
      </form>
    </>
  )
}