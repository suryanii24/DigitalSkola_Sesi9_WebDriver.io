import { $ } from '@wdio/globals'
import page from './page.js';

class CartPage extends page{
    get title() { return $('.title'); }
    get inventoryItems() { return $$('.inventory_item'); }
    get addToCartButtons() { return $$('.btn_inventory'); }
    get cartIcon() { return $('.shopping_cart_link'); }

    async validateDashboard() {
        await expect(this.title).toBeDisplayed();
        await expect(this.title).toHaveTextContaining('Products');
    }

    async addItemToCart() {
        await this.addToCartButtons[0].click();
    }

    async validateItemInCart() {
        await this.cartIcon.click();
        await expect($('.cart_item')).toBeDisplayed();
    }
}

module.exports = new CartPage();
