describe('Pizza Sipariş Formu Testleri', () => {
  it('İsim inputuna metin girilebiliyor', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('input#customerName')
      .type('Ahmet Yılmaz')
      .should('have.value', 'Ahmet Yılmaz');
  });

  it('Birden fazla malzeme seçilebiliyor', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('input[type="checkbox"]').eq(0).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(1).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(2).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(3).check().should('be.checked');
  });

  it('Form gönderilebiliyor', () => {
    cy.visit('http://localhost:5173/order');

    cy.get('input#customerName').type('Zeynep Güneş');

    cy.get('input[type="radio"]').eq(1).check();
    cy.get('select#crust').select('kalın');

    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();

    cy.contains('SİPARİŞ VER').should('not.be.disabled').click();

    cy.url().should('include', '/success');
    cy.contains('TEBRİKLER').should('exist');
  });
});

/* describe('Pizza Sipariş Formu Testleri', () => {
  it('İsim inputuna metin girilebiliyor', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('input#customerName')
      .type('Ahmet Yılmaz')
      .should('have.value', 'Ahmet Yılmaz');
  });

  it('Birden fazla malzeme seçilebiliyor', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('input[type="checkbox"]').eq(0).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(1).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(2).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(3).check().should('be.checked');
  });

  it('Form gönderilebiliyor', () => {
    cy.visit('http://localhost:5173/order');

    cy.get('input#customerName').type('Zeynep Güneş');

    cy.get('input[type="radio"]').eq(1).check();
    cy.get('select#crust').select('kalın');

    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();

    cy.contains('SİPARİŞ VER').should('not.be.disabled').click();

    cy.url().should('include', '/success');
    cy.contains('TEBRİKLER').should('exist');
  });
}); */
