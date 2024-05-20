/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email is invalid
 *   - should display alert when email is already registered
 *   - should display homepage when registration is successful
 */

/* global describe, beforeEach, it, cy, expect */
describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    // Verify elements that should appear on the register page
    cy.get('input[placeholder="Name"]').should('be.visible');
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Register$/)
      .should('be.visible');
  });

  it('should display alert when name is empty', () => {
    // Click register button without entering name
    cy.get('button')
      .contains(/^Register$/)
      .click();

    // Verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    // Fill in name
    cy.get('input[placeholder="Name"]').type('John Doe');

    // Click register button without entering email
    cy.get('button')
      .contains(/^Register$/)
      .click();

    // Verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // Fill in name and email
    cy.get('input[placeholder="Name"]').type('John Doe');
    cy.get('input[placeholder="Email"]').type('john@example.com');

    // Click register button without entering password
    cy.get('button')
      .contains(/^Register$/)
      .click();

    // Verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email is invalid', () => {
    // Fill in name, invalid email, and password
    cy.get('input[placeholder="Name"]').type('John Doe');
    cy.get('input[placeholder="Email"]').type('invalid_email');
    cy.get('input[placeholder="Password"]').type('password');

    // Click register button
    cy.get('button')
      .contains(/^Register$/)
      .click();

    // Verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when email is already registered', () => {
    // Fill in name, registered email, and password
    cy.get('input[placeholder="Name"]').type('John Doe');
    cy.get('input[placeholder="Email"]').type('already_registered@example.com');
    cy.get('input[placeholder="Password"]').type('password');

    // Click register button
    cy.get('button')
      .contains(/^Register$/)
      .click();

    // Verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email is already registered');
    });
  });

  it('should display homepage when registration is successful', () => {
    // Fill in name, unique email, and password
    const uniqueEmail = `user${Math.floor(Math.random() * 1000000)}@example.com`;
    cy.get('input[placeholder="Name"]').type('John Doe');
    cy.get('input[placeholder="Email"]').type(uniqueEmail);
    cy.get('input[placeholder="Password"]').type('password');

    // Click register button
    cy.get('button')
      .contains(/^Register$/)
      .click();

    // Verify that elements on the homepage are displayed
    cy.get('.login-page').should('be.visible');
  });
});
