describe('Schedule an Appointment', () => {
    beforeEach(() => {
      visitLoginPage()
    })
  
  it('User logs into CoVi-Book', () => {
      loginWith('admin@gmail.com', '123456')
      cy.url().should('eq', 'http://localhost:3000/login')
      cy.get("#mappointment").click()
      cy.url().should('eq', 'http://localhost:3000/list')
      cy.get("#vaccinebook").click()
      cy.url().should('eq', 'http://localhost:3000/code')
      cy.get("#goback").click()
      cy.url().should('eq', 'http://localhost:3000/user')
      cy.get("#cancel").click()
      cy.get("#yescancel").click()
      logout()
      cy.url().should('eq', 'http://localhost:3000/')
  })
  

  })
  
  const visitLoginPage = () => {
    cy.visit('http://localhost:3000/login')
  }
  
  const loginWith = (email, password) => {
    cy.get('#memail').type(email)
    cy.get('#mpassword').type(password)
    //cy.get('button').click()
    cy.get('#mlogin').click()
  }
  const logout = () => {
    cy.get('#mlogout').click()
  }