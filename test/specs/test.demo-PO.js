import homePage from "../pageobjects/home.page";
import loginPage from "../pageobjects/login.page";


describe('Login Test', () => {
    it('Test 3 Successfull login - Page Object Based', async() => {
        await loginPage.open()
        await loginPage.login("standard_user", "secret_sauce")
        await homePage.validateOnHomePage()
    });

    it('Test 4 Successfull login - Page Object Based', async() => {
        await loginPage.open()
        await loginPage.login("standard_user", "secret_sauce")
        await homePage.validateWrongPasswordDisplayed()
    });
});