import { Link } from "react-router-dom";
import styles from './PageSuccess.module.scss'

export function PageSuccess (props) {

  return (
    <div className={styles.page}>
      <div className={styles.successWrapper}>
        <div className={styles.successText}>Поздравляем! Вы успешно заполнили форму!</div>
        <div className={[styles.successText, styles.successTextSecondary].join(' ')}>
          Можете <Link 
            to={'/'}
            className={styles.textLink}>
              попробовать еще раз
          </Link>
        </div>
      </div>
    </div>
  )
}