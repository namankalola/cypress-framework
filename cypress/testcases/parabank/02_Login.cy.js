import { getSharedData } from '../../support/sharedData';
import homePage from '../../pages/parabank/HomePage';

describe('Customer Login', () => {
    let username; // Declare username at the suite level

    before(() => {
        // Retrieve the username dynamically before the tests run
        cy.task('getSharedData', 'username').then((value) => {
            username = value; // Retrieve the username
        });
    });

    beforeEach(() => {
        homePage.visitBank();
    });

    it('should log in with valid credentials and then logout', () => {
        homePage.enterUsername(username); // Use the dynamically retrieved username
        homePage.enterPassword('password123');
        homePage.clickLoginButton();
        homePage.verifyAccountOverviewPage();
        homePage.clickLogoutButton();
    });
});