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

Cypress.Commands.add('getElementText', (selector, errorText = '') => {
    cy.get(selector).should('be.visible').invoke('text').then(text => {
        expect(text).not.to.be.empty
        if(errorText.length !== 0){
            expect(text).to.be.eql(text)
        }
    })
})

Cypress.Commands.add('viewportPreset', (size = '') => {
    switch(size) {
        case 'imac' :
            cy.viewport(2560, 1440)
            break;
        case 'iphone-se' :
            cy.viewport(375, 667)
            break;
        case 'samsung-s10-plus' :
            cy.viewport(412, 869)
            break;
        case 'ipad-pro' :
            cy.viewport(1366, 1024)
            break;
        case 'ms-surface' :
            cy.viewport(1200, 720)
            break;
        default:
            cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'))
    }
})
