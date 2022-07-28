import { Given,When, Then } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../support/page-objects/pages/loginPage'
import { header } from '../../support/page-objects/components/header'
import { faker } from '@faker-js/faker'

beforeEach(() => {
    cy.reload()
})

Given('user visits home page', () => {  
    cy.visit('/')
    header.clickOnAccountMenuButton();
    loginPage.clickOnLoginButtonFromPopup();
})

When('user adds invalid credentials', () => {
    const password = faker.internet.password(10)
    const email = faker.internet.email();
    loginPage.getLoginForm(email, password)
})

When('user adds empty credentials', () => {
    loginPage.clickOnLoginButton()
})

Then('user is not logged in with invalid credentials', () => {
   const errorMessage = "Моля, провери данните си."
   cy.getElementText(loginPage.errorCommonMessage, errorMessage)
})

Then('user is not logged in with empty credentials', () => {
    const errorEmailMessage = "Моля, въведи твоя имейл адрес"
    const errorPasswordMessage = "Моля, въведи паролата си"
    cy.getElementText(loginPage.errorInputMessage, errorEmailMessage)
    cy.getElementText(loginPage.errorInputMessage, errorPasswordMessage)
 })