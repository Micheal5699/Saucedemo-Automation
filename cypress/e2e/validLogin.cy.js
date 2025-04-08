import {Login} from "../fixtures/selectors.js";
    export const validLogin = () => {
        cy.get(Login.usernameField).type('standard_user')
        cy.get(Login.passwordField).type('secret_sauce')
        cy.get(Login.loginButton).click()
    }