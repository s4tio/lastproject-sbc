import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login.cy";
import reset_pass from "../../../pom/reset_pass.cy";
import admin from "../../../pom/admin.cy";

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

Then('klik tambah', () => {
    admin.addButton().click();
});

Then('pilih user role', () =>{
    admin.selectUserRole();
});

Then('klik user role', () =>{
     admin.klikRole();
});


When('pilih user status', () =>{
    admin.selectUserStatus();
});

When('klik user status', () =>{
    admin.klikStatus();
});

When('masukkan namalengkap', () =>{
    admin.masukkanNamaLengkap().type('Rodney Jones');
    
});

When('klik nama user', () =>{
    admin.klikNamaUser();

});

When('masukkan username', () =>{
    admin.masukkanUsername();
});

When('masukkan password', () =>{
    admin.masukkanPassword().type('123qwe123');
});

When('masukkan confirm password', () =>{
    admin.masukkanConfirmPassword().type('123qwe123');
});

Then('simpan user data', () =>{
    admin.simpanUser();
});

Then('simpan data berhasil', () =>{
    admin.verifyTambahDataSucces().should('have.text', 'Success');
});