import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login.cy";
import reset_pass from "../../../pom/reset_pass.cy";
import admin from "../../../pom/admin.cy";
import searchAdmin from "../../../pom/search.cy";

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

When('cari username', () => {
    searchAdmin.cariUsername().type('fufufafa');
});

When('cari user role', () => {
    searchAdmin.cariUserRole();
});

When('klik cari user role', () =>{
    searchAdmin.klikCariUserRole();
});

When('cari nama karyawan', () =>{
    searchAdmin.cariNamaKaryawan().type('James Rodrigues   WC Golden Boot ');
});

When('klik nama karyawan', () =>{
    searchAdmin.klikNamaKaryawan();
});

When('cari user status', () =>{
    searchAdmin.cariUserStatus();
});

When('klik user status', () =>{
    searchAdmin.klikUserStatus();
});

Then('klik cari user', () =>{
    searchAdmin.klikCariUser();
});

Then('validasi cari user', () =>{
    searchAdmin.validasiSearch().should('have.text', '(1) Record Found');
});