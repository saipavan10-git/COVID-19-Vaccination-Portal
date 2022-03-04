/// <reference types="cypress" />

describe('CoVi Book Sprint 2 Testing', () => {
    it('test home page', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Welcome to Covi-Book!')
        cy.contains('A website you can check your vaccination info and more!').should('exist')
        cy.contains('Login').should('not.exist')
        cy.get('div')
        cy.contains('Vaccine List')
    })

    it('test login with records', () => {
        cy.visit('http://localhost:3000/login')
        cy.contains('Login')
        cy.get('input')
        cy.get('button')
            .click().should('exist')
        cy.contains('Sign up').should('exist')
        cy.contains('Records').should('exist')
        cy.viewport(1920, 1080)

        cy.contains('Records').click()
        cy.url().should('eq', 'http://localhost:3000/records')
        cy.contains('Go Back').click()
    })

    it('test sign up', () => {
        cy.visit('http://localhost:3000/signup')
        cy.contains('Sign Up')
        cy.get('input')
        cy.get('button')
            .click().should('exist')

        cy.contains('Sign up').should('exist')

        cy.url().should('eq', 'http://localhost:3000/signup')
        cy.contains('Vaccine List')
    })

    it('test Vaccine List', () => {
        cy.visit('http://localhost:3000/list')
        cy.contains('Sign Up').should('not.exist')
        cy.get('input')
        cy.get('button').should('exist')
        cy.contains('Login')
        cy.contains('Sign up')
        cy.contains('Home')
        cy.contains('Book').click()
    })

    it('test Vaccine List', () => {
        cy.visit('http://localhost:3000/user')
        cy.get('button').should('exist')
        cy.contains('Below are your basic information:')
        cy.contains('What would you like to do?')
        cy.url().should('include', 'user')
    })

})