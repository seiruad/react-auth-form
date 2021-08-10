import { Auth } from "features/auth/Auth.component";
import { PageSuccess } from "pages/PageSuccess/PageSuccess.component";
import { Route, Switch } from "react-router-dom";
import styles from './PageAuth.module.scss'

export function PageAuth (props) {

  return (
    <div className={styles.page}>
      {/* <div className={styles.nav} ></div> */}
      <Switch>
        <Route path={'/page-success'}> <PageSuccess /> </Route>
        <Route path={'/'}> <Auth />  </Route>
      </Switch> 
    </div>
  )
}