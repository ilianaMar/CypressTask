class LoginPage {
    constructor() {
        this.emailInputId = '[data-testid="EmailField"]'
        this.passwordInputId = '[data-testid="PasswordField"]'
        this.loginButtonId = '[data-testid="SubmitLogin"]'
        this.formButtons = '[data-testid="RegisterAndLoginButtons"]'
        this.signUpForm = '[data-testid="LoginFlowWrapper"]'
        this.signUpFormHeader = '[data-testid="NavigationHeader"]'
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

    getLoginForm(email, password){
        clickOnLoginButtonFromPopup();
        fillInEmailField(email);
        fillInPasswordField(password);
        cy.get(this.loginButtonId).click()
    }
}

export const loginPage = new LoginPage()