describe('Login', () => {

  it('Deve logar com sucesso', () => {

    cy.fixture('user').then((user) => {

      cy.login(user.validUser.username, user.validUser.password)

      cy.url().should('include', '/inventory.html')
      cy.get('.title').should('have.text', 'Products')

    })

  })

})

it('Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {

  cy.fixture('user').then((user) => {

    cy.login(user.invalidUser.username, user.invalidUser.password)

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match')

  })

})
