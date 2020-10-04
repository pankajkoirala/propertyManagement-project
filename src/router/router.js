import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "../component/login/login";
import PrivateRouter from "./privateRouter"

const RouterPage = () => {
    return (
            <Router>
                <Switch>
                    <PrivateRouter>
                    <Route exact path="/login" component={LoginComponent} />
                    </PrivateRouter>
                </Switch>
            </Router>
    )
}
export default RouterPage