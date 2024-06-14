//Codigo para uso de comandos:
/// <reference types ="cypress" />





describe("Ejemplo de Type pageUp and pageDown", () => {
    it("Type PageUp", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1000)

        cy.get("#user-message").type('{pageup}')
        cy.wait(1000)
    })

    it.only("Type PageDown", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1000)

        cy.get("#user-message").type('{pagedown}')
        cy.wait(1000)
    })
})