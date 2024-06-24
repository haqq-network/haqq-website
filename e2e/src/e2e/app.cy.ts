import { getGreeting } from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => {
    return cy.visit('/');
  });

  it('should display hero heading message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Home of ethical web3/);
  });
});
