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
      return $('//*[@id="__layout"]/div/div/div[3]/div/div/div/div/div/section/div/div[1]/form/div[1]/div/div[1]/input')
    }
    
    public get inputLastName () {
      return $('#__layout > div > div > div.site-modal > div > div > div > div > div > section > div > div.form-step.step-1 > form > div.form-last-name-input > div > div.wrapper > input')
    }

    public get inputEmail () {
        return $('[name="email"]')
    }

    public get inputPhoneNumber () {
      return $('[name="phone"]');
    }
    
    public get inputDoors () {
      return $('[name="units"]');
    }

    public get btnSubmit () {
        return $('//*[@id="__layout"]/div/div/div[3]/div/div/div/div/div/section/div/div[1]/form/div[6]/div/button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * 
     */
    
    public async cleanForm() {
      await browser.pause(50)
      await this.inputFirstName.doubleClick()
      browser.keys("Delete")
      await this.inputLastName.doubleClick()
      browser.keys("Delete")
      await this.inputEmail.click()
      browser.keys(['Meta', 'A'])
      await browser.pause(20)
      browser.keys("Delete")
      await this.inputPhoneNumber.click()
      browser.keys(['Meta', 'A'])
      await browser.pause(20)
      browser.keys("Delete")
      await browser.pause(20)
      await this.inputDoors.doubleClick()
      await browser.pause(20)
      browser.keys("Delete")
      await browser.pause(100)
    }

    public async fillContact(firstname: string , lastname: string , email: string, phonenumber: string, doors: string) {
      await this.cleanForm()
      await this.inputFirstName.setValue(firstname);
      await this.inputLastName.setValue(lastname);
      await this.inputEmail.setValue(email);
      await this.inputPhoneNumber.setValue(phonenumber);
      await this.inputDoors.setValue(doors);
      await browser.pause(200)
    }
 
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new FormPage();
