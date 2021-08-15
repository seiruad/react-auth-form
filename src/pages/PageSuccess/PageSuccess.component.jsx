import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "pages/Page/Page.component";
import styles from './PageSuccess.module.scss'

export function PageSuccess (props) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(1)
  }, [])

  return (
    <Page>
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
    </Page>
  )
}