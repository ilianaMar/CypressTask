import { Given,When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../support/page-objects/pages/loginPage'
import { header } from '../../support/page-objects/components/header'
import { faker } from '@faker-js/faker'

Before(() => {
    cy.reload()
})

Given('user visits login page', () => {  
    cy.visit('/')
    cy.get(loginPage.notifyPopupId).click()
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

 When('user fills in email in forgot password page', () => {
    const email = faker.internet.email();
    loginPage.fillInForgotPasswordForm(email)

})

Then('forgot password request is sent successfully', () => {
    loginPage.getSuccessfullForgotPasswordMessage()
})