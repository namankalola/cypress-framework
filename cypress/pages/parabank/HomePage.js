class HomePage{
    weblocators = {
        registerLink : "#loginPanel>p:nth-of-type(2) a",
        userName : "input[name='username']",
        password : "input[name='password']",
        loginButton : "input[value='Log In']",
        accountOverview : "#showOverview > .title",
        logoutButton : "a[href='logout.htm']",
    }

    visitBank(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")    
    }

    enterUsername(username){
        cy.log('Entering username: ' + username);
        cy.get(this.weblocators.userName).type(username);
    }
    enterPassword(password){
        cy.log('Entering password: ' + password);
        cy.get(this.weblocators.password).type(password);
    }
    clickLoginButton(){
        cy.log('Clicking login button');
        cy.get(this.weblocators.loginButton).click();
    }
    clickRegisterLink(){
        cy.log('Clicking register link');
        cy.get(this.weblocators.registerLink).click();
    }
    verifyAccountOverviewPage(){
        cy.log('Verifying account overview page');
        cy.url().should('include', '/overview.htm');
        cy.get(this.weblocators.accountOverview).should('be.visible');
    }
    clickLogoutButton(){
        cy.log('Clicking logout button');
        cy.get(this.weblocators.logoutButton).click();
    }   
}

export default new HomePage();