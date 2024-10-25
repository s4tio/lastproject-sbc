import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login.cy";
import reset_pass from "../../../pom/reset_pass.cy";
import admin from "../../../pom/admin.cy";
import searchAdmin from "../../../pom/search.cy";
import hapusDataUser from "../../../pom/hapus.cy";

Given('membuka halaman login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(1000);
  
});

When('validasi homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});

When('masukan username', () => {
    loginPage.inputUsername().type('Admin');
});

When('masukan password', () => {
    loginPage.inputPassword().type('admin123');
});

Then('klik button login', () => {
    loginPage.InterceptLogin();
    loginPage.buttonSubmit().click();
    
});

Then('masuk halaman dashboard', () =>{
    loginPage.dashboardPage().should('have.text', 'Dashboard');
});

When('klik admin', () =>{
    admin.klikadmin().click();
})

When('validasi halaman admin', () => {
    admin.adminPage().should('have.text','Admin');
});

When('klik hapus data user', () =>{
    hapusDataUser.klikHapusData();
});

Then('konfirm hapus data user', () =>{
    hapusDataUser.konfirmHapusData();
});

Then('validasi hapus data berhasil', () => {
    hapusDataUser.verifyHapusSucces().should('have.text', 'Success');
});