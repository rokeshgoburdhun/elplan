// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import 'cypress-file-upload';
Cypress.Commands.add('acceptCookies', (label) => {
    cy.get('[id="bannerAcceptButton"]').should('be.visible').click()
  })


  Cypress.Commands.add('lookFantasticLogin', (dataList) => {
    cy.get('[class=responsiveAccountHeader_openAccountPanelText]').click()
        cy.wait(7000);

        cy.fixture(dataList).then(data => {
            const registrationDetails = data[1]            

            cy.get('[id=username]').type(registrationDetails.email)
            cy.get('[id=password]').type(registrationDetails.password)
            cy.get('[id=login-submit]').should("be.visible").click();
            cy.wait(1000)
            cy.url().should('include', '/accountHome.account')

            cy.get('[class=myAccountSection_header_welcome]').contains("Welcome rokesh")            
        })
  })

  Cypress.Commands.add('vwMenuValidation', (dataList) => {
    cy.xpath("//button[@aria-label='Menu']").should('be.visible').click()
    //cy.get('[class=StyledTextWrapper-ceVsuj eApvZM]').should('be.visible')
   //button[@aria-label='Menu']

        cy.wait(1000);
        cy.get('[class=StyledTextWrapper-ceVsuj eApvZM]').should('be.visible')
       // cy.xpath('//ul[@class="productListProducts_products"]').find('>li').eq(0).screenshot()
  })



