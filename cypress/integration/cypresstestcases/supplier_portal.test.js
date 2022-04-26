/// <reference types="cypress"  />
describe('supplier', ()=> {
    beforeEach(() =>{
        cy.viewport('macbook-13')
        cy.visit('https://supplier-uat-miliki.k8s.tracom.co.ke:2020/')

    })
    it('Test one',() =>{
        cy.contains('Kindly enter username and password to login').should('exist')
        cy.contains('Proceed').should('exist')
        cy.contains('Forgot password').click()
        cy.url().should('include','/forgotPassword')
    })
    it('Should login succesfully',() =>{
        cy.contains('Email Address or Username').should('exist')
        cy.log('Enter Username')
        cy.get('#normal_login_username').type('supplier@example.com',{ delay: 1000 })
        cy.contains('Email Address or Username').should('exist')
        cy.log('Enter Password')
        cy.get('#normal_login_password').type('1234',{ delay: 100 })
        cy.log('Click Proceed Button')
        cy.contains('Proceed').click()
        cy.url().should('include','/new-task')
        
        
    })
    it('Log out',() =>{
        cy.contains('Email Address or Username').should('exist')
        cy.get('#normal_login_username').type('supplier@example.com',{ delay: 100 })
        cy.contains('Email Address or Username').should('exist')
        cy.get('#normal_login_password').type('1234',{ delay: 100 })
        cy.contains('Proceed').click()
        cy.get('.c-avatar').click()
        cy.contains('Logout').click()
        
        
        
    })
    it('Forgot Password',() =>{
        cy.log('Forgot Password')
        cy.contains('Forgot password').click()
        cy.url().should('include','/forgotPassword')
        cy.contains("Forgot Password").should('exist')
        cy.contains('Have you forgotten your password?')
        cy.contains('Enter your Email Address').should('exist')
        cy.contains('Back').should('exist')
        cy.log('Enter Email to resend the password')
        cy.get('#username').type('solutions.supplier@mail.com',{ delay: 100 })
        cy.contains('Reset Password').click()
        cy.url().should('exist','https://supplier-uat-miliki.k8s.tracom.co.ke:2020/')


        
        
    })
    
    

}
)