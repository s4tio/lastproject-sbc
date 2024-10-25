export default class loginPage{

    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    };
    static inputUsername(){
        return cy.get('[name="username"]');
    };
    static inputPassword(){
        return cy.get('[name="password"]');
    };
    static buttonSubmit(){
        return cy.get('[type="submit"]');
    };
    static invalidCredentials(){
        return cy.get('[class="oxd-alert-content oxd-alert-content--error"]');
    };
    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    };

    static InterceptLogin(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');

    }

    static waitLogin(){
        return cy.wait('@actionSummary');
    }


}