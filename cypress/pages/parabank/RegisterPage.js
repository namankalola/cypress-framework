class RegisterPage{ 
    weblocators = { 
        firstName : "input[name='customer.firstName']", 
        lastName : "input[name='customer.lastName']",
        address : "input[name='customer.address.street']",
        city : "input[name='customer.address.city']",
        state :  "input[name='customer.address.state']",
        zipCode : "input[name='customer.address.zipCode']",
        phoneNumber : "input[name='customer.phoneNumber']",
        ssN : "input[name='customer.ssn']",
        Username : "input[name='customer.username']",
        password : "input[name='customer.password']",
        confirmPassword : "#repeatedPassword",
        registerButton : "input[value='Register']",
        registrationSuccessMessage : ".title",
        registrationUserExistsMessage : ".error",
    }
    
    enterFirstName(firstName){
        cy.get(this.weblocators.firstName).type(firstName);
        cy.log('First name entered: ' + firstName);
    }
    enterLastName(lastName){
        cy.get(this.weblocators.lastName).type(lastName);
        cy.log('Last name entered: ' + lastName);
    } 
    enteraddress(address){
        cy.get(this.weblocators.address).type(address);
        cy.log('Address entered: ' + address);
    }
    entercity(city){
        cy.get(this.weblocators.city).type(city);
        cy.log('City entered: ' + city);
    }
    enterstate(state){
        cy.get(this.weblocators.state).type(state);
        cy.log('State entered: ' + state);
    }   
    enterzipcode(zipCode){
        cy.get(this.weblocators.zipCode).type(zipCode);
        cy.log('Zip code entered: ' + zipCode);
    }   
    enterphonenumber(phoneNumber){
        cy.get(this.weblocators.phoneNumber).type(phoneNumber);
        cy.log('Phone number entered: ' + phoneNumber);
    }
    enterssn(ssN){
        cy.get(this.weblocators.ssN).type(ssN);
        cy.log('SSN entered: ' + ssN);
    }
    enterusername(Username){
        cy.get(this.weblocators.Username).type(Username);
        cy.log('Username entered: ' + Username);
    }
    enterpassword(password){
        cy.get(this.weblocators.password).type(password);
        cy.log('Password entered: ' + password);
    }
    enterconfirmpassword(confirmPassword){
        cy.get(this.weblocators.confirmPassword).type(confirmPassword);
        cy.log('Confirm password entered: ' + confirmPassword);
    }
    clickRegisterButton(){
        cy.get(this.weblocators.registerButton).click();
        cy.log('Register button clicked.');
    }  
    verifyRegistrationSuccessMessage(name){
        cy.get(this.weblocators.registrationSuccessMessage).contains('Welcome ' + name);
        cy.log('Registration success message verified: Welcome ' + name);
    }  
    verifyUserExistsMessage(){
        cy.get(this.weblocators.registrationUserExistsMessage).contains('This username already exists.');
        cy.log('User exists message verified: This username already exists.');
    }
}

export default new RegisterPage();