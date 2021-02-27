describe('Homepage', () => {
  it('Should open the home page with the login form for a not logged in user', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Sign in')
  })

  it('Should print out an error message, if the user attempts to log in with invalid credentials', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Sign in')

    cy.get('#email').type('testuser@example.net')
    cy.get('#password').type('this-does-not-exist')
    cy.get('.MuiButton-label').click()
    cy.contains(
      'There is no user record corresponding to this identifier. The user may have been deleted.'
    )
  })
})
