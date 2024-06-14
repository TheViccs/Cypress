/// <reference types ="cypress" />
require('cypress-plugin-tab')

describe("Emjemplo Tab", () => {
    it("Type con Tab", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(3000)
        //TAB
        cy.get("#value1").type(1).tab().type(2)
        cy.wait(3000)
    })
})