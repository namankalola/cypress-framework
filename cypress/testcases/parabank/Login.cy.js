import homePage from '../../pages/parabank/HomePage';
describe('Customer Login', () => {
    const username = 'user_1743518330064';
    beforeEach(() => {
        homePage.visitBank();
    });
    afterEach(() => {
        cy.log('Test case completed.');
    });
    after(() => {
        cy.log('Test suite execution finished.');
    });
    before(() => {
        cy.log('Setting up test suite...');
    });
    it('should log in with valid credentials and then logout', () => {
        homePage.enterUsername(username);
        homePage.enterPassword('password123');
        homePage.clickLoginButton();
        homePage.verifyAccountOverviewPage();
        homePage.clickLogoutButton();
    });

})