import { Given,When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('user visits home page', () => {
    cy.visit('/');
})

When('user adds invalid {string}', (fieldName) => {})

Then('user is not logged in', () => {})