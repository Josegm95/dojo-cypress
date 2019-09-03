describe('my first vtex e2e test', () => {
  it('check checkout', () => {
    cy.visit('https://spirito.com.co/');
    cy.contains('Ropa').click();
    cy.url().should('include', '/ropa');
    cy.wait(10000);
    cy.get('.product_shelve_description')
      .contains('Vestido Estampado Bot')
      .click();
    cy.contains('COMPRAR AHORA').click();

    cy.url().should('include', '/checkout/#/cart');
    cy.contains('Finalizar compra').click();
    cy.get('#client-pre-email')
      .type('jose.fgm1995@gmail.com')
      .should('have.value', 'jose.fgm1995@gmail.com');
    cy.wait(8000);
    cy.get('#btn-client-pre-email > span').click();
    cy.get('#client-first-name')
      .type('Jose')
      .should('have.value', 'Jose');
    cy.get('#client-last-name')
      .type('Gomez')
      .should('have.value', 'Gomez');
    cy.get('#client-document')
      .type('1216718777')
      .should('have.value', '1216718777');
    cy.get('#client-phone')
      .type('3147318330')
      .should('have.value', '3147318330');
    cy.get('#go-to-shipping').click();
  });
});
