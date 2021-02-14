import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
const browserHistory = createBrowserHistory()

export default () =>
    <Router history={browserHistory}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    </Router>