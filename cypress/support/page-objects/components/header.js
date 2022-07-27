class Header {
    constructor() {
        this.accountMenuButton = '[data-test-id="UserAccount"]'
    }

    clickOnAccountMenuButton(){
        cy.get(this.accountMenuButton).should('be.visible').click();
    }
}

export const header = new Header()