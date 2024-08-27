const LoginPage = require('../pageobjects/LoginPage');
const cartPage = require('../pageobjects/cart.page');

describe('SauceDemo Tests', () => {
    it('should login successfully with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await CartPage.validateDashboard();
    });

    it('should add an item to the cart', async () => {
        await CartPage.addItemToCart();
        await cartPage.validateItemInCart();
    });
});
