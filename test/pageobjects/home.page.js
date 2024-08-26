import { $, expect } from '@wdio/globals'
import Page from "./page";

class HomePage extends page{

    get cartItem(){
        return $("#shopping_cart_container")
    }

    get addToCartButton(){
        return $("#add-to-cart-sauce-labs-bike-light")
    }

    get productImage(){
        return $("#item_0_img_link")
    }

    async validateOnHomePage(){
        await expect(this.productImage).toBeExisting();
        await expect(this.cartItem).toBeExisting();
        await expect(this.addToCartButton).toBeExisting();
    }

    open(){
        return super.open("inventory.html")
    }
}

export default new HomePage();