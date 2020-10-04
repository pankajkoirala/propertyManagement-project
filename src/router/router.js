import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "../component/login/login";
import PrivateRouter from "./privateRouter"
import Homepage from "../container/homepage/homepage"
import PropertyEntry from "../container/propertyEntryForm/PropertyEntryForm"

const RouterPage = () => {
    return (
            <Router>
                <Switch>
                <Route exact path="/" component={Homepage} />  
                <Route exact path="/entry" component={PropertyEntry} />                    
                    <PrivateRouter exact path="/login" component={LoginComponent} />
                </Switch>
            </Router>
    )
}
export default RouterPage