
export default class hapusDataUser{


    static klikHapusData(){
        return cy.get('[class="oxd-table-cell-actions"]').eq(1).click('left');    //klik hapus
        //return cy.get('[class="oxd-table-cell-actions"]').eq(1).click(60,15); //klik edit
    };

    static konfirmHapusData(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click();
    };

    static verifyHapusSucces(){
        return cy.get('[aria-live="assertive"]').contains('Success');
    };

}








