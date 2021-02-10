import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from '../pages/Home'

const browserHistory = createBrowserHistory()

const Routes = () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes