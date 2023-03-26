import FormPage from '../pageobjects/form.page'
import HomePage from '../pageobjects/home.page'
import url from '../../url.json'

describe('Reaching Contact Form', () => {
    it('should open the browser and reach webpage', async () => {
        await HomePage.open(url["url"])
    })

    it('should reach the contact form from the homepage', async () => {
        await expect(HomePage.btnContact).toBeExisting()
        await expect(HomePage.btnContact).toHaveText('Talk With Us')
    })
    
    it('should check the contact form is available', async () => {
        await HomePage.clickContactForm()
        await expect(FormPage.inputFirstName).toBeExisting()
        await expect(FormPage.inputLastName).toBeExisting()
        await expect(FormPage.inputEmail).toBeExisting()
        await expect(FormPage.inputPhoneNumber).toBeExisting()
        await expect(FormPage.inputDoors).toBeExisting()        
    })
    
    it('should check contact form cannot be submitted without Name, Phone or Door count', async () => {
        await FormPage.fillContact("","Doe","test@test.com","555-880-1234","10")
        await expect(FormPage.btnSubmit).toBeDisabled()
        await FormPage.fillContact("Jhon","","test@test.com","555-880-1234","10")
        await expect(FormPage.btnSubmit).toBeDisabled()
        await FormPage.fillContact("Jhon","Doe","","555-880-1234","10")
        await expect(FormPage.btnSubmit).toBeDisabled()
        await FormPage.fillContact("Jhon","Doe","test@test.com","","10")
        await expect(FormPage.btnSubmit).toBeDisabled()
        await FormPage.fillContact("Jhon","Doe","test@test.com","555-880-1234","")
        await expect(FormPage.btnSubmit).toBeDisabled()
    })
    
    it('should check contact Form cannot be submitted with an invalid phone number', async () => {
        await FormPage.fillContact("Jhon","Doe","test@test.com","0000","10")
        await expect(FormPage.btnSubmit).toBeDisabled()
        await FormPage.fillContact("Jhon","Doe","test@test.com","A25-880-1234","10")
        await expect(FormPage.btnSubmit).toBeDisabled()
        await FormPage.fillContact("Jhon","Doe","test@test.com","","10")
        await expect(FormPage.btnSubmit).toBeDisabled()
    })

    it('should check submit button is available when everything is filled out correctly', async () => {
        await expect(await FormPage.btnSubmit).toBeDisabled()
        await FormPage.fillContact("Jhon","Doe","test@test.com","555-880-1234","10")
        await expect(await FormPage.btnSubmit).toBeEnabled()
    })
})

