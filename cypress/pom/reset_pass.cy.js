export default class reset_pass{


    static forgot_pass(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    };


    static verifyResetPage(){
        return cy.get('h6').contains('Reset Password');
    };

    static inputResetUsername(){
        return cy.get('[name="username"]');
    };

    static submitResetPassword(){
        return cy.get('[type="submit"]');
    };

    static verifyResetSucces(){
        return cy.get('h6').contains('Reset Password link sent successfully');
    }

}









