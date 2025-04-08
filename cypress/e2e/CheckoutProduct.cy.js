import { Product } from "../fixtures/selectors.js";
const access = require("./ValidLogin.cy.js");
describe("Given i am on the Product page", function () {
  beforeEach(function () {
    cy.visit('/')
    access.validLogin();
    })
  it("Valid Product checkout", function () {
    cy.get(Product.addToCartButton).click()
    cy.get(Product.cartIcon).click()
    cy.get(Product.checkOutButton).click()
    cy.get(Product.firstnameField).type('Ibukun')
    cy.get(Product.lastnameField).type('Micheal')
    cy.get(Product.zipPostalCodeField).type('100001')
    cy.get(Product.continueButton).click()
    cy.get(Product.finishButton).click()
    cy.contains('Thank you for your order!').should('be.visible')

    })
    it("Invalid Product checkout - Empty First Name", function () {
    cy.get(Product.addToCartButton).click()
    cy.get(Product.cartIcon).click()
    cy.get(Product.checkOutButton).click()
    cy.get(Product.lastnameField).type('Micheal')
    cy.get(Product.zipPostalCodeField).type('100001')
    cy.get(Product.continueButton).click()
    cy.contains('Error: First Name is required').should('be.visible')

    })
    it("Invalid Product checkout - Empty Last Name", function () {
    cy.get(Product.addToCartButton).click()
    cy.get(Product.cartIcon).click()
    cy.get(Product.checkOutButton).click()
    cy.get(Product.firstnameField).type('Ibukun')
    cy.get(Product.zipPostalCodeField).type('100001')
    cy.get(Product.continueButton).click()
    cy.contains('Error: Last Name is required').should('be.visible')

    })
    it("Invalid Product checkout - Empty Zip/Postal Code", function () {
    cy.get(Product.addToCartButton).click()
    cy.get(Product.cartIcon).click()
    cy.get(Product.checkOutButton).click()
    cy.get(Product.firstnameField).type('Ibukun')
    cy.get(Product.lastnameField).type('Micheal')
    cy.get(Product.continueButton).click()
    cy.contains('Error: Postal Code is required').should('be.visible')
  })
})