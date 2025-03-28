import LoginPage from '../support/pages/LoginPage';

describe('Login Test for SauceDemo', () => {
    it('should successfully log in with valid credentials', () => {
        LoginPage.visit();
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLoginButton();
        cy.url().should('include', '/inventory');
        cy.get('.title').should('have.text', 'Products');
    });

    it('should fail to log in with invalid credentials', () => {
        LoginPage.visit();
        LoginPage.enterUsername('invalid_user');
        LoginPage.enterPassword('wrong_password');
        LoginPage.clickLoginButton();
        LoginPage.verifyErrorMessage('Username and password do not match any user in this service');
    });

    it('should display error for locked out user', () => {
        LoginPage.visit();
        LoginPage.enterUsername('locked_out_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLoginButton();
        LoginPage.verifyErrorMessage('Sorry, this user has been locked out.');
    });

    it('should display error for problem user', () => {
        LoginPage.visit();
        LoginPage.enterUsername('problem_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLoginButton();
        cy.get('.inventory_item_img').should('be.visible')
            .and('have.attr', 'src').and('not.be.empty');
    });
});