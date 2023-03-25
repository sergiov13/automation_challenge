import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputFirstName () {
        return $('#name');
    }

    public get inputLastName () {
      return $('#username');
    }

    public get inputEmail () {
        return $('#email');
    }

    public get inputPhoneNumber () {
      return $('#phone');
    }
    
    public get inputDoors () {
      return $('#units');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * 
     */
    public async fillContact(firstname: string, lastname: string, email: string, phonenumber: string, doors: string) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputEmail.setValue(email);
        await this.inputPhoneNumber.setValue(phonenumber);
        await this.inputDoors.setValue(doors);
        // await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new FormPage();
