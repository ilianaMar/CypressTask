class Header {
    constructor() {
        this.accountMenuButton = '[data-test-id="UserAccount"]'
        this.headerLogo = '[data-test-id="TextLogoContainer"]'
    }

    clickOnAccountMenuButton(){
        cy.get(this.accountMenuButton).should('be.visible').click();
    }
}

export const header = new Header()