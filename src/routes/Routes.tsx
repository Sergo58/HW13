import React from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import Error404Page from "../pages/Error404Page";
import {LoginPage} from "../pages/LoginPage";
import {PasswordRecoveryPage} from "../pages/PasswordRecoveryPage";
import {PasswordNewPage} from "../pages/PasswordNewPage";
import {ProfilePage} from "../pages/ProfilePage";
import {RegisterPage} from "../pages/RegisterPage";
import {TestPage} from "../pages/TestPage";


export const PATH = {
    LOGIN: "/login",
    PASSWORD_RECOVERY: "/password-recovery",
    PASSWORD_NEW: "/password-new",
    PROFILE: "/profile",
    REGISTER: "/register",
    TEST: "/test",

}

function Routes() {
    return (
        <div>

            <Switch>


                <Route path={"/"} exact render={() => <Redirect to={PATH.TEST}/>}/>

                <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecoveryPage/>}/>
                <Route path={PATH.PASSWORD_NEW} render={() => <PasswordNewPage/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfilePage/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterPage/>}/>
                <Route path={PATH.TEST} render={() => <TestPage/>}/>


            <Route render={() => <Error404Page/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
