import { Auth } from "features/auth/Auth.component";
import { Page } from "pages/Page/Page.component";
import { PageSuccess } from "pages/PageSuccess/PageSuccess.component";
import { Route, Switch } from "react-router-dom";
import styles from './PageAuth.module.scss'

export function PageAuth (props) {
  return (
    <Page>
      <Switch>
        <Route path={'/page-success'}> <PageSuccess /> </Route>
        <Route path={'/'}> <Auth />  </Route>
      </Switch> 
    </Page>
  )
}