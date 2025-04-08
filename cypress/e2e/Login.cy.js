import { Login } from "../fixtures/selectors.js";
describe("Given i am on the Login page", function () {
  beforeEach(function () {
    cy.visit('/')
  })
  it("Valid Login", function () {
    cy.get(Login.usernameField).type('standard_user')
    cy.get(Login.passwordField).type('secret_sauce')
    cy.get(Login.loginButton).click()
    cy.contains('Products').should ('be.visible')

  })
  it("Invalid Login - Wrong password", function () {
    cy.get(Login.usernameField).type('standard_user')
    cy.get(Login.passwordField).type('secret_sau')
    cy.get(Login.loginButton).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should ('be.visible')

  })
  it("Invalid Login - Wrong username", function () {
    cy.get(Login.usernameField).type('standard_')
    cy.get(Login.passwordField).type('secret_sauce')
    cy.get(Login.loginButton).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should ('be.visible')

  })
  it("Invalid Login - Empty username field", function () {
    cy.get(Login.passwordField).type('secret_sauce')
    cy.get(Login.loginButton).click()
    cy.contains('Epic sadface: Username is required').should ('be.visible')

  })
  it("Invalid Login - Empty password field", function () {
    cy.get(Login.usernameField).type('standard_user')
    cy.get(Login.loginButton).click()
    cy.contains('Epic sadface: Password is required').should ('be.visible')
  })
})