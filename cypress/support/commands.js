Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')

  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})


Cypress.Commands.add('addToCart', (productId) => {
  cy.get(`[data-test="add-to-cart-${productId}"]`).click()
})

Cypress.Commands.add('goToCart', () => {
  cy.get('.shopping_cart_link').click()
})

Cypress.Commands.add('fillCheckoutData', (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]').type(firstName)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(postalCode)
})






