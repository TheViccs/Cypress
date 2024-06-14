/// <reference types ="cypress" />

describe("Seccion 1 Valida el titulo", () => {
    it("Test titulo", () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        
        cy.log("Funciona title exitosa")
    })
})