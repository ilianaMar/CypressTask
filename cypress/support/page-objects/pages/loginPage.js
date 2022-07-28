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
}

export const loginPage = new LoginPage()