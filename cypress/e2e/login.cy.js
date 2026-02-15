const { should } = 

describe ('Login',() => {
it('Realizar login e logout com sucesso', () => {
 
    // Arrange
    cy.visit ('https://www.saucedemo.com/')
    
   // Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
   

   // Assert
   cy.url().should('eq','https://www.saucedemo.com/inventory.html')

   // Act
   cy.get('[id="react-burger-menu-btn"]').click()
   cy.get('[data-test="logout-sidebar-link"]').click()

   
})
})