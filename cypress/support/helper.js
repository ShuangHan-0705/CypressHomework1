export function getUserNameInput() {
  return cy.get('input[data-test="username"]');
}

export function getPassWordInput() {
  return cy.get('input[data-test="password"]');
}
