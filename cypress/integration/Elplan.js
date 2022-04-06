
const fixturesData = require('../fixtures/Elplan.json')

fixturesData.forEach(datalist => {


    before("Load Home page", () => {
        cy.viewport(1500, 1500)
        cy.visit(datalist.webapp )        
    })
    
    afterEach(() => {
       
        Cypress.Cookies.preserveOnce('orangehrm')  

    })
    

    describe(`Test Case: - Login`, function () {

        it('Enter Credential', () => {
            cy.get('[id=txtUsername]').type(datalist.username)   
            cy.get('[id=txtPassword]').type(datalist.password) 
        })
        it('Click login button', () => {
            cy.get('[id=btnLogin]').click()
        })
        it('Verify cookie token', () => {
            cy.getCookie('orangehrm').should('exist')
        })
    })

    
    describe(`Test Case: -Upload image`, function () {

        it('Navigate to Buzz tab', () => {
            cy.get('[id=menu_buzz_viewBuzz]').click()
            cy.get('[id=images-tab-label]').click()       
        })
        it('Upload image', () => {         
            cy.get('[id=photofile]').attachFile('batman.png')
            cy.get('[id=imageUploadBtn]').click()
         })
        // it('Delete Image', () => {         
        //     cy.xpath('//a[@id="5"]').click()
        //     cy.get('[id=deleteShare_16]').click()
        // })

    })

})
