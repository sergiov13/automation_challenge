import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'
import FormPage from '../pageobjects/form.page'
import HomePage from '../pageobjects/home.page'

describe('Reaching Contact Form', () => {
    it('should reach the contact form from the homepage', async () => {
        // await LoginPage.open()
        await HomePage.open()
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')

        await expect(HomePage.btnContact).toBeExisting()
        await expect(HomePage.btnContact).toHaveText('Talk With Us')
    //     await expect(SecurePage.flashAlert).toBeExisting()
    //     await expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!')
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
        await expect(FormPage.btnSubmit).toBeDisabled
    })

    it('should check contact form cannot be submitted without Name, Phone or Door count', async () => {
        await FormPage.fillContact("Jhon", "Doe", "test@gmail.com", "555-230-2455","15")
        await expect(FormPage.btnSubmit).toBeDisabled

    })

    it('should check contact Form cannot be submitted with an invalid phone number', async () => {
    })

    it('should check submit button is available when everything is filled out correctly')
})

