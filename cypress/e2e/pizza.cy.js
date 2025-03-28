describe('Pizza Sipariş Formu Testleri', () => {
  it.skip('İsim inputuna metin girilebiliyor', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('input#customerName')
      .type('Ahmet Yılmaz')
      .should('have.value', 'Ahmet Yılmaz');
  });

  it.skip('Birden fazla malzeme seçilebiliyor', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('input[type="checkbox"]').eq(0).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(1).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(2).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(3).check().should('be.checked');
  });

  it.skip('Form gönderilebiliyor', () => {
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

/* */

describe('Main Page Category Navigation', () => {
  it('Kategori navigasyonunda 6 link bulunmalı', () => {
    cy.visit('http://localhost:5173/');

    cy.get('nav').find('a').should('have.length', 6);
  });
});

/* describe('Menu Items Grid', () => {
  it('3 adet menü linki tıklanabiliyor ve /order sayfasına yönleniyor', () => {
    cy.visit('http://localhost:5173/');

    cy.get('a[href="/order"]')
      .should('have.length', 3)
      .each(($link) => {
        cy.wrap($link).click();
        cy.url().should('include', '/order');

        cy.go('back');
      });
  });
}); */

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
