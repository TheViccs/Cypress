//Codigo para uso de comandos:
/// <reference types ="cypress" />

describe("Funciones para type", () => {
    it("Type ENTER", () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        cy.wait(1500)
        cy.get("#APjFqb").type("Cypress io {enter}")
        cy.wait(1500)
        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
    })
})