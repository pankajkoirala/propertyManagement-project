import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "../container/login/login ";
import PrivateRouter from "./privateRouter"
import Homepage from "../container/homepage/homepage"
import PropertyEntry from "../container/propertyEntryForm/PropertyEntryForm"

const RouterPage = () => {
    return (
            <Router>
                <Switch>
                <PrivateRouter exact path="/" component={Homepage} />  
                <PrivateRouter exact path="/entry" component={PropertyEntry} />                    
                    <Route exact path="/login" component={LoginComponent} />
                </Switch>
            </Router>
    )
}
export default RouterPage