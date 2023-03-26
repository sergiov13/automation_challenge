import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'
import FormPage from '../pageobjects/form.page'
import HomePage from '../pageobjects/home.page'

describe('Reaching Contact Form', () => {
    it('should open the browser and reach webpage', async () => {
        const browser = await HomePage.open()
    })

    it('should reach the contact form from the homepage', async () => {
        await expect(HomePage.btnContact).toBeExisting()
        await expect(HomePage.btnContact).toHaveText('Talk With Us')
    })

    it('should check the contact form is available', async () => {
        await HomePage.clickContactForm()
        await expect(FormPage.inputFirstName).toBeExisting
        await expect(FormPage.inputLastName).toBeExisting
        await expect(FormPage.inputEmail).toBeExisting
        await expect(FormPage.inputPhoneNumber).toBeExisting
        await expect(FormPage.inputDoors).toBeExisting
        // await expect(HomePage.clickContactForm).

    })

    it('should check contact form cannot be submitted without Name, Phone or Door count', async () => {
        await FormPage.fillContact("","Doe","555-880-1234","test@test.com","10")
        await expect(FormPage.btnSubmit).toBeDisabled
        browser.pause(15000)
        await FormPage.cleanForm()
        await FormPage.fillContact("Jhon","","555-880-1234","test@test.com","10")
        await expect(FormPage.btnSubmit).toBeDisabled
        await FormPage.cleanForm()
        browser.pause(15000)
        await FormPage.fillContact("Jhon","Doe","","test@test.com","10")
        await expect(FormPage.btnSubmit).toBeDisabled
        await FormPage.cleanForm()
        await FormPage.fillContact("Jhon","Doe","555-880-1234","","10")
        await expect(FormPage.btnSubmit).toBeDisabled
        await FormPage.cleanForm()
        await FormPage.fillContact("Jhon","Doe","555-880-1234","test@test.com","")
        await expect(FormPage.btnSubmit).toBeDisabled
        await FormPage.cleanForm()
    })

    
    it('should check contact Form cannot be submitted with an invalid phone number', async () => {
        await FormPage.fillContact("Jhon","Doe","55-880-1234","test@test.com","10")
        await expect(FormPage.btnSubmit).toBeDisabled
        await FormPage.cleanForm()
        await FormPage.fillContact("Jhon","Doe","A25-880-1234","test@test.com","10")
        await expect(FormPage.btnSubmit).toBeDisabled
        await FormPage.cleanForm()
        await FormPage.fillContact("Jhon","Doe","000-000-0000","test@test.com","10")
        await expect(FormPage.btnSubmit).toBeDisabled
        browser.pause(150000)
        await FormPage.cleanForm()
    })
    
    it('should check submit button is available when everything is filled out correctly', async () => {
        await FormPage.fillContact("Jhon","Doe","555-880-1234","test@test.com","10")
        browser.pause(150000)
        await !expect(FormPage.btnSubmit).toBeEnabled
    })
    
    it('sit and wait', async () =>{
        browser.pause(10000000)
    })
})

