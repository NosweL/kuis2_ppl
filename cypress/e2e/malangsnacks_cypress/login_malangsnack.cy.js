// Gagal - Email atau Password Salah
describe('Testing Malang Snack', () => {
  it('I can search for content', () => {
    cy.visit('https://malangsnack.000webhostapp.com/index.php?page=login');
    cy.get("input[name='email']").type('welson@gmail.com'); // Valid Email
    cy.get("input[name='password']").type('12345').wait(5000).type('{enter}'); // Invalid Password
    cy.wait(5000);
    cy.get("button[class='swal-button swal-button--confirm swal-button--danger']").type('{enter}');
    cy.wait(1000);
  });
});

// Gagal - Email tidak Valid
describe('Testing Malang Snack', () => {
  it('I can search for content', () => {
    cy.visit('https://malangsnack.000webhostapp.com/index.php?page=login');
    cy.get("input[name='email']").type('welson'); // Incorrect Email Format
    cy.get("input[name='password']").type('12345').wait(5000).type('{enter}'); // Valid Password
    cy.wait(5000);
    cy.get("button[class='swal-button swal-button--confirm swal-button--danger']").type('{enter}');
    cy.wait(1000);
  });
});

// Berhasil - Berhasil Login Selamat Datang Welson Mario
describe('Testing Malang Snack', () => {
    it('I can search for content', () => {
      cy.visit('https://malangsnack.000webhostapp.com/index.php?page=login');
      cy.get("input[name='email']").type('welson@gmail.com'); // Valid Username/Email
      cy.get("input[name='password']").type('123456').wait(5000).type('{enter}'); // Valid Password
      cy.wait(5000);
      cy.get("button[class='swal-button swal-button--confirm']").type('{enter}');
      cy.wait(1000);
    });
  });