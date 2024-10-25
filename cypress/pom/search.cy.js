


export default class searchAdmin{


    static cariUsername(){
        return cy.get('[class="oxd-input oxd-input--active"]').eq(1);
    };


    static cariUserRole(){
        return cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click();
    };

    static klikCariUserRole(){
       return cy.get('[role="listbox"]').click();   //click option 1
       //return cy.get('[role="listbox"]').click(60,100); //click option 2
    };

    static cariNamaKaryawan(){
        return cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]');
    };

    static klikNamaKaryawan(){
        return cy.get('[role="listbox"]').wait(3000).click();
    };

    static cariUserStatus(){
        return cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click();
    };

    static klikUserStatus(){
        //return cy.get('[role="listbox"]').click();   //click option 1
        return cy.get('[role="listbox"]').click(60,100); //click option 2
    };

    static klikCariUser(){
        return cy.get('[type="submit"]').click();
    };

    static validasiSearch(){
        return cy.get('[class="oxd-text oxd-text--span"]').contains('(1) Record Found')
    };

};

