class LoginPage {
    constructor() {
        this.emailInputId = '[data-testid="EmailField"]'
        this.passwordInputId = '[data-testid="PasswordField"]'
        this.loginButtonId = '[data-testid="SubmitLogin"]'
        this.formButtons = '[data-testid="RegisterAndLoginButtons"]'
        this.signUpForm = '[data-testid="LoginFlowWrapper"]'
        this.signUpFormHeader = '[data-testid="NavigationHeader"]'
        this.errorInputMessage = '[data-testid="ErrorInfoText"]'
        this.errorCommonMessage = '.gCMsSs'
        this.forgotErrorButtonLoginForm = '[data-testid="ForgotPasswordButton"]'
        this.forgotSubmitButton = '[data-testid="ForgotPasswordSubmitButton"]'
        this.forgotPasswordForm = '[data-testid="ForgotPasswordContainer"]'
        this.notifyPopupId = '#onetrust-accept-btn-handler'
        this.forgotPasswordSuccessDivId = '.sc-18qwf1v-2'
    }

    clickOnLoginButtonFromPopup(){
        cy.get(this.signUpForm).should('be.visible')
        cy.get(this.signUpFormHeader).should('be.visible')
        cy.get(this.formButtons).find('div').children().eq(1).click();
    }

    fillInEmailField(email){
        cy.get(this.emailInputId).should('be.visible').type(email)
    }

    fillInPasswordField(password){
        cy.get(this.passwordInputId).should('be.visible').type(password)
    }

    clickOnLoginButton(){
        cy.get(this.loginButtonId).click()
    }

    getLoginForm(email, password){
        this.clickOnLoginButtonFromPopup()
        this.fillInEmailField(email)
        this.fillInPasswordField(password)
        this.clickOnLoginButton()   
    }

    fillInForgotPasswordForm(email){
        cy.get(this.forgotErrorButtonLoginForm).should('be.visible').click()
        cy.get(this.forgotPasswordForm).find(this.emailInputId).should('be.visible').type(email)
        cy.intercept({
            method: 'POST',
            url: 'https://grips-web.aboutyou.com/checkout.CheckoutV1/forgetPassword' 

        }).as('forgotRequest')
        cy.get(this.forgotSubmitButton).should('be.visible').click()
        cy.wait('@forgotRequest').its('response.statusCode').should('be.eql', 200)
    }

    getSuccessfullForgotPasswordMessage(){
        cy.get(this.forgotPasswordSuccessDivId).should('be.visible').and('not.be.empty')
    }
}

export const loginPage = new LoginPage()