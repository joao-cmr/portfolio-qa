/// <reference types="cypress" />

describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('/login.html')
    })



    it('Deve realizar login com sucesso', () => {
        cy.get('#email').type('admin@admin.com')
        cy.get('#password').type('admin')
        cy.get('.btn').click()
        cy.get('h1').should('contain', 'Minha conta')
    })

});