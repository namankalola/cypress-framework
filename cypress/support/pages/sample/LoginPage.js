class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    enterUsername(username) {
        cy.get('#user-name').type(username);
    }

    enterPassword(password) {
        cy.get('#password').type(password);
    }

    clickLoginButton() {
        cy.get('#login-button').click();
    }

    verifyErrorMessage(expectedMessage) {
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', expectedMessage);
    }
}

export default new LoginPage();