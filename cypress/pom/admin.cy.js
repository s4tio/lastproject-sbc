

export default class admin{

    static klikadmin(){
        return cy.get('[href="/web/index.php/admin/viewAdminModule"]');
    };

    static adminPage(){
        return cy.get('h6').contains('Admin');
    };

    static addButton(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]');
    };

    static selectUserRole(){
       return cy.get('[class="oxd-select-text-input"]').eq(0).click();

    };

    static klikRole(){
       return cy.get('[role="listbox"]').click();   //click option 1
       //return cy.get('[role="listbox"]').click(170,90); //click option 2
    
    };

    static selectUserStatus(){
        return cy.get('[class="oxd-select-text-input"]').eq(1).click();
 
     };

    static klikStatus(){
        //return cy.get('[role="listbox"]').click();   //click option 1
        return cy.get('[role="listbox"]').click(170,90); //click option 2
     
     };

    static masukkanNamaLengkap(){
        return cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]');
    };

    static klikNamaUser(){
        return cy.get('[role="listbox"]').wait(3000).click();  
        
    };

    static masukkanUsername(){
        return cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('fufufafa');

    };


    static masukkanPassword(){
        return cy.get('[type="password"]').eq(0);
    };
    
    static masukkanConfirmPassword(){
        return cy.get('[type="password"]').eq(1);
    };

   static simpanUser(){
        return cy.get('[type="submit"]').click();
   };

   static verifyTambahDataSucces(){
        return cy.get('[aria-live="assertive"]').contains('Success');
   };


};