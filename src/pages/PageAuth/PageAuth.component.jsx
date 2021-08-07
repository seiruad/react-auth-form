import { Auth } from "features/auth/Auth.component";
import styles from './PageAuth.module.scss'

export function PageAuth (props) {

  return (
    <div className={styles.page}>
      {/* <div className={styles.nav} ></div> */}
      <Auth /> 
    </div>
  )
}