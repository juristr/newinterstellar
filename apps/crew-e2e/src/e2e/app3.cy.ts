import { getGreeting } from '../support/app.po';

describe('crew-e2e three', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    cy.wait(2000);

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });

  it('should display welcome message 2', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    cy.wait(2000);

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});