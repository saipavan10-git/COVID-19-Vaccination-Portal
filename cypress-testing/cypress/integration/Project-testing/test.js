/// <reference types="cypress" />

describe('CoVi Book Sprint 3 Testing', () => {

    it('test login with login', () => {
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
        cy.get('button').click({ multiple: true }).should('exist')
        cy.contains('Login')
        cy.contains('Sign up')
        cy.contains('Home')
        cy.contains('Book').click()
    })

    it('test Homepage', () => {
        cy.visit('http://localhost:3000/user')
        cy.contains('Schedule an Appointment')
        cy.contains('Fill Details for Vaccination Certifcate')
        cy.contains('Covid data dashboard')
        cy.url().should('include', 'user')
    })

    it('test Update Information', () => {
        cy.visit('http://localhost:3000/update')
        cy.contains('First Name')
        cy.contains('Last Name')
        cy.contains('SSN')
        cy.contains('Generate Certifiacate')
        cy.get('input')
        cy.get('button')
        cy.contains('Generate Certifiacate').should('exist')
        cy.url().should('include', 'update')
    })


})