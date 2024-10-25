import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login.cy";
import reset_pass from "../../../pom/reset_pass.cy";


Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(1000);
  
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});

When('I submit the Username', () => {
    loginPage.inputUsername().type('Admin');
});

When('I submit the Password', () => {
    loginPage.inputPassword().type('admin123');
});

Then('I click the button Login', () => {
    loginPage.InterceptLogin();
    loginPage.buttonSubmit().click();
    
});
