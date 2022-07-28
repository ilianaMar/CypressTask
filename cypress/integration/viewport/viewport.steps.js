import { Given, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { header } from '../../support/page-objects/components/header'


Before(()=> {
   cy.reload()
})
 
 Given('user visits homepage on different viewport {string}', (viewport) => { 
    cy.viewportPreset(viewport)
    cy.visit('/')
})

Then('user sees screen in expected size', () => {  
    cy.get(header.headerLogo).should('be.visible')
})