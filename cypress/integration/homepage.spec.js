import { header } from "../support/page-objects/components/header";

describe('Click on top menu', () => {
    const firstLevelItems = {0: "zheni", 1 : "mazhe", 2 : "detsa"}
    const secondLevelItems ={1 : "drexi", 2 : "obuvki", 3 : "sport"}

    beforeEach(() => {
       cy.reload()
    })

    it('test first level menu', () => {
        let urlSlug
        cy.visit('/')
        header.getfirstLevelLinkCount().then((cnt) => {
            for (let index = 0; index < cnt; index++) {
                header.clickOnFirstLevelMenuItem(index)
                switch (index) {
                    case 0:
                        urlSlug = 'gender=female'
                        break;
                    case 1:
                        urlSlug = 'gender=male'
                        break;
                    case 2:
                        urlSlug = 'detsa'
                        break;
                    default:
                        console.log(`Sorry, expression ${index} is not correct`)
                }
                cy.url().should('include', urlSlug) 
            }
        })     
    })

    it('test third level menu', () => {
        const firstLevelIndex = 0
        const secondLevelIndex = 1
        const linkHref = 'novo'
        const urlSlug = `${firstLevelItems[firstLevelIndex]}/${secondLevelItems[secondLevelIndex]}/${linkHref}`
        cy.visit('/')
        header.clickOnFirstLevelMenuItem(firstLevelIndex)
        header.clickOnThirdLevelMenuItem(secondLevelIndex, linkHref)
        cy.url().should('contain', urlSlug)
    })
})