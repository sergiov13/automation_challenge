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
      return $('//*[@id="__layout"]/div/div/div[1]/section[1]/div/div/div/div[1]/div[1]/footer/div/div/button');
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    public open (path: string ) {
        return super.open(path);
    }

    public async clickContactForm() {
      await this.btnContact.click();
    }
    
}

export default new HomePage();
