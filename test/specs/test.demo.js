

describe('Test Soucedemo', () => {
    it('Test 1 - Login Success', async() => {
        await browser.url ("https://www.saucedemo.com/")

        const usernameTextBox = await browser.$("#user-name")
        const passwordTextBox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextBox.addValue("standard_user")
        await passwordTextBox.addValue("secret_sauce")
        await loginButton.click()

        await browser.pause(5000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')
    });
});

describe('Test Saucedemo', () => {
    it('Test 2 - Add Item to Cart', async() => {
       
        await browser.url("https://www.saucedemo.com/")

        const usernameTextBox = await browser.$("#user-name")
        const passwordTextBox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextBox.addValue("standard_user")
        await passwordTextBox.addValue("secret_sauce")
        await loginButton.click()

        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        const firstItemAddToCartButton = await browser.$('//button[@data-test="add-to-cart-sauce-labs-backpack"]')
        await firstItemAddToCartButton.click()
       
        const cartBadge = await browser.$('.shopping_cart_badge')
        await expect(cartBadge).toBeDisplayed()
        await expect(cartBadge).toHaveText('1')
       
        const cartIcon = await browser.$('.shopping_cart_link')
        await cartIcon.click()
       
        const cartItem = await browser.$('.cart_item')
        await expect(cartItem).toBeDisplayed()

        const cartItemName = await browser.$('.inventory_item_name')
        await expect(cartItemName).toHaveText('Sauce Labs Backpack')
       
        const cartQuantity = await browser.$('.cart_quantity')
        await expect(cartQuantity).toHaveText('1')
      
        await browser.pause(5000)
    });
});
