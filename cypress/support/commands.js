// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("efetuarLogin", (login, senha) => {
    cy.get("#login2").should("be.visible").click();
    cy.get(".modal-content").should("be.visible");
    cy.get("#loginusername").should("be.visible").type(login, { force: true });
    cy.get("#loginpassword").should("be.visible").type(senha);
    cy.get('button[onclick="logIn()"]').click();
});
