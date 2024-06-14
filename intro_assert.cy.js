/// <reference types ="cypress" />

describe("INTRODUCCION A LOS ACCESRTS", () => {
    it("Demo de asserts", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1000)

        cy.get("#user-message").should("be.visible").type("Victor")
    })
})