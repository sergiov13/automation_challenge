import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get form () {
      return $('[name="name"]')
      
    }

    public get inputFirstName () {
      return $('[name="name"]:nth-child(1)')
    }

    public get inputLastName () {
      return $('[name="name"]')
    }

    public get inputEmail () {
        return $('[name="email"]');
    }

    public get inputPhoneNumber () {
      return $('[name="phone"]');
    }
    
    public get inputDoors () {
      return $('[name="units"]');
    }

    // has disabled property when disabled
    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * 
     */
    public async fillContact(firstname: string , lastname: string , email: string, phonenumber: string, doors: string) {
      await this.inputFirstName.setValue(firstname);
      await this.inputLastName.setValue(lastname);
      await this.inputEmail.setValue(email);
      await this.inputPhoneNumber.setValue(phonenumber);
      await this.inputDoors.setValue(doors);
        // await this.btnSubmit.click();
    }

    public async cleanForm() {
      await this.inputFirstName.setValue('');
      await this.inputLastName.setValue('');
      await this.inputEmail.setValue('');
      await this.inputPhoneNumber.setValue('');
      await this.inputDoors.setValue('');
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new FormPage();
