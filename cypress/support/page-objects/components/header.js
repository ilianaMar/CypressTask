class Header {
    constructor() {
        this.accountMenuButton = '[data-test-id="UserAccount"]'
        this.headerLogo = '[data-test-id="TextLogoContainer"]'
        this.topCategoriesContainer = '[data-testid="topCategoriesContainer"]'
        this.subCategories = '[data-testid="categoryList"]'
        this.topCategoryMenus = "//div[contains(@class, 'topRowContainer')]/div[1]"
        this.limitationsMenuId = "//li[@data-test-id='Header_navigation_list_item_Лимитирани колекции']"
        this.clothesMenuId = "//li[@data-test-id='Header_navigation_list_item_Дрехи']"
        
    }

    clickOnAccountMenuButton(){
        cy.get(this.accountMenuButton).should('be.visible').click()
    }

    getfirstLevelLinkCount(){
        return cy.xpath(this.topCategoryMenus).children().its('length')  
    }

    clickOnFirstLevelMenuItem(index){
        cy.xpath(this.topCategoryMenus).children().should('have.length', 3)
        cy.xpath(this.topCategoryMenus).find('a').eq(index).click()
    }

    clickOnSecondLevelMenuItem(index){
        cy.get(this.topCategoriesContainer).children().eq(index).click()
    }

    clickOnThirdLevelMenuItem(topMenuindex, href){
        let secondLevelLocator 
        
        switch (topMenuindex) {
            case 0:
                secondLevelLocator = this.limitationsMenuId
                break;
            case 1:
                secondLevelLocator = this.clothesMenuId
                break;
            default:
                console.log(`Sorry, expression ${index} is not correct`)
        }

        cy.xpath(secondLevelLocator).should('be.visible').realHover()

        cy.xpath(`${secondLevelLocator}//a[contains(@href, '${href}')]`).click()
      
    }
}

export const header = new Header()