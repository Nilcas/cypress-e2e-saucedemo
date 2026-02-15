describe('Checkout', () => {

  it('Deve realizar checkout com sucesso', () => {

    cy.fixture('user').then((user) => {

      // 1) Login
      cy.login(user.validUser.username, user.validUser.password)

      // 2) Adicionar produto no carrinho
      cy.addToCart('sauce-labs-backpack')

      // 3) Ir para o carrinho
      cy.get('.shopping_cart_link').click()

      // 4) Validar que entrou no carrinho
      cy.url().should('include', '/cart.html')

      // 5) Validar que o produto aparece no carrinho
      cy.get('.inventory_item_name')
        .should('contain.text', 'Sauce Labs Backpack')

      // 6) Iniciar checkout
      cy.get('[data-test="checkout"]').click()

      // 7) Validar que está na tela de checkout step 1
      cy.url().should('include', '/checkout-step-one.html')

      // 8) Preencher dados do checkout
      cy.get('[data-test="firstName"]').type('Nilcas')
      cy.get('[data-test="lastName"]').type('Castro')
      cy.get('[data-test="postalCode"]').type('07097-4200')

      // 9) Continuar
      cy.get('[data-test="continue"]').click()

      // 10) Validar que está no step 2
      cy.url().should('include', '/checkout-step-two.html')

      // 11) Finalizar compra
      cy.get('[data-test="finish"]').click()

      // 12) Validar mensagem final de sucesso
      cy.get('.complete-header')
        .should('have.text', 'Thank you for your order!')

    })

  })

})
