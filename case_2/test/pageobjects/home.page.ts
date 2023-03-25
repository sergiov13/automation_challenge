import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnContact () {
      return $('button');
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    public open () {
        return super.open();
    }

    public async clickContactForm() {
      await this.btnContact.click();
    }
    
}

export default new HomePage();
