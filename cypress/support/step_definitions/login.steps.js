import { Given,When, Then } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../support/page-objects/pages/loginPage'
import { header } from '../../support/page-objects/components/header'

Given('user visits home page', () => {
    cy.visit('/');
    header.clickOnAccountMenuButton();
    loginPage.clickOnLoginButtonFromPopup();
})

When('user adds invalid {string}', (fieldName) => {})

Then('user is not logged in', () => {})