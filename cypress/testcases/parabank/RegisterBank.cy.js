import homePage from '../../pages/parabank/HomePage';
import registerPage from '../../pages/parabank/RegisterPage';

describe('Register Bank Test', () => {
    let testData;

    before(() => {
        cy.log('Reading test data from Excel file...');
        const filePath = 'cypress/fixtures/TestData.xlsx';
        const sheetName = 'Sheet1';
        cy.log('File path: ' + filePath);
        cy.log('Sheet name: ' + sheetName); 
        cy.task('readExcel', { filePath, sheetName }).then((data) => {
            testData = data; // Store the test data
        });

        Cypress.env('username', 'user_' + Date.now());
    });

    beforeEach(() => {
        homePage.visitBank();
    });

    it('should successfully register a new user', () => {
        const user1 = testData[0];
        const username = Cypress.env('username');
        homePage.clickRegisterLink();
        registerPage.enterFirstName(user1.FirstName);
        registerPage.enterLastName(user1.LastName);
        registerPage.enteraddress(user1.Address);
        registerPage.entercity(user1.City);
        registerPage.enterstate(user1.State);
        registerPage.enterzipcode(user1.ZipCode);
        registerPage.enterphonenumber(user1.PhoneNumber);
        registerPage.enterssn(user1.SSN);
        registerPage.enterusername(username);
        registerPage.enterpassword(user1.Password);
        registerPage.enterconfirmpassword(user1.Password);
        registerPage.clickRegisterButton();
        registerPage.verifyRegistrationSuccessMessage(username);
    });

    it('This username already exists. - Message displayed', () => {
        const user2 = testData[1];
        const username = Cypress.env('username');
        homePage.clickRegisterLink();
        registerPage.enterFirstName(user2.FirstName);
        registerPage.enterLastName(user2.LastName);
        registerPage.enteraddress(user2.Address);
        registerPage.entercity(user2.City);
        registerPage.enterstate(user2.State);
        registerPage.enterzipcode(user2.ZipCode);
        registerPage.enterphonenumber(user2.PhoneNumber);
        registerPage.enterssn(user2.SSN);
        registerPage.enterusername(username);
        registerPage.enterpassword(user2.Password);
        registerPage.enterconfirmpassword(user2.Password);
        registerPage.clickRegisterButton();
        registerPage.verifyUserExistsMessage();
    });
});