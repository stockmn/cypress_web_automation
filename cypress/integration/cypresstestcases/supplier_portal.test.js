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
        cy.get('#normal_login_username').type('supplier@example.com',{ delay: 100 })
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
        cy.contains('supplier@example.com').click()
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
    
    it('Navigate through the supplier portal dashboard', ()=>{
        cy.contains('Email Address or Username').should('exist')
        cy.get('#normal_login_username').type('supplier@example.com',{delay: 100})
        cy.get('#normal_login_password').type('1234',{delay: 200})
        cy.contains('Proceed').click()
        cy.url().should('include',"/new-task")
        cy.contains('New Task').click()
        cy.contains('Device Model Onboarding').click()
        cy.contains('Manufacturer').should('exist')
        cy.contains('Device Type').should('exist')
        cy.contains('Device Model')
        cy.contains('Select Device Manufacturer').click()
        cy.contains('Tracom Liberia').click()
        cy.contains('Select Device Type').click()
        cy.contains('Cash Register').click()
        cy.get('.ant-select-selection_rendered').click()
        cy.contains('incotex 133').click()
        cy.contains('Request').click()
        cy.contains('Supplier Device Certification Successful').should("exist")



    })
    it('Device  Requisition', ()=>{
        cy.contains('Email Address or Username').should('exist')
        cy.get('#normal_login_username').type('supplier@example.com',{delay: 100})
        cy.get('#normal_login_password').type('1234',{delay: 200})
        cy.contains('Proceed').click()
        cy.url().should('include',"/new-task")
        cy.contains('New Task').click()
        cy.contains('Select a manufacturer, Device type and other details to complete your Requisition...').click()
        cy.contains('Quantity').should('exist')
        cy.contains('Select Device Model').click()
        cy.contains('fiscal').click()
        cy.get('#device_requisition_quantity').type('13',{delay: 200})
        cy.contains('Request').click()
        cy.contains('Device Requisition Success').should("exist")
        cy.contains('Okay').click()



    })
    it('SimCard Requisition', ()=>{
        cy.contains('Email Address or Username').should('exist')
        cy.get('#normal_login_username').type('supplier@example.com',{delay: 100})
        cy.get('#normal_login_password').type('1234',{delay: 200})
        cy.contains('Proceed').click()
        cy.url().should('include',"/new-task")
        cy.contains('New Task').click()
        cy.contains('Select a supplier, mobile network and other details to complete Requisition...').click()
        cy.contains('Mobile Network Operator(MNO) Name').should('exist')
        cy.contains('Select Mobile Network Operator').click()
        cy.contains('MTN').click()
        cy.get('#simCardRequisitions_quantity').type('10',{delay: 200})
        cy.get('Select date').click()
        cy.get('Select date').type("26").click()
        cy.get('#simCardRequisitions_comment').type('I need simcard is urgently',{delay: 200})
        cy.contains('Request').click()
        cy.contains('Sim Card Requisition Successful').should("exist")
        cy.contains('Okay').click()



    })
    
    

}
)