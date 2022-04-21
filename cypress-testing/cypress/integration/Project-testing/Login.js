describe('login Page', () => {
    beforeEach(() => {
      visitLoginPage()
    })
  
  it('User logs into CoVi-Book', () => {
      loginWith('admin@gmail.com', '123456')
      cy.url().should('eq', 'http://localhost:3000/login')
  })
  
    it("should validate email",()=>{
      cy.get('#memail')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
  })
  
  it("password should not be empty",()=>{
      cy.get('#mpassword')
    .type('password')
    .should('have.value', 'password')
  })
  
  it("Validating Logout",()=>{
    loginWith('admin@gmail.com', '123456')
    cy.url().should('eq', 'http://localhost:3000/login')
    logout()
    cy.url().should('eq', 'http://localhost:3000/')
  
  })
  
  it(' Checking Invalid Login credentials', () => {
    loginWith('Srisai123@gmail.com','12345678')
    cy.url().should('eq', 'http://localhost:3000/login')
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