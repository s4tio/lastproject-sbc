import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login.cy";
import reset_pass from "../../../pom/reset_pass.cy";


When('kunjungi website', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(1000);
});

When('melihat homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});

Then('klik lupa password', () =>{
    reset_pass.forgot_pass().click();
})

When('melihat halaman reset password', () => {
    reset_pass.verifyResetPage().should('have.text', 'Reset Password');
});

When('masukan username', () => {
    reset_pass.inputResetUsername().type('Admin');
});

Then('klik reset password', () =>{
    reset_pass.submitResetPassword().click();
});

Then('reset password berhasil', () =>{
    reset_pass.verifyResetSucces().should('have.text', 'Reset Password link sent successfully');
});

