import { $ } from '@wdio/globals'
import page from './page.js';

class LoginPage extends page{
    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
