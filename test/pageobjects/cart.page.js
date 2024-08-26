import Page from "./page";

class CartPage extends page{

    get checkoutButton(){}
    get continueShopping(){}
    

    open(){
        return super.open("cart.html")
    }
}

export default new CartPage();