const {expect} = require ('@playwright/test');
 
class LoginPage{
 
    constructor(page){
        this.page=page;
        this.LoginButton = page.locator("//div[@class='MuiStack-root navbar-data-parent css-kzi4bb']//button");
        this.UsernameField = page.locator("#username");
        this.PasswordField = page.locator("#password");
        this.SubmitButton = page.locator('[type="submit"]');
        this.ErrorMessage = page.locator('//div[@role="alert"]');
        this.UsernameAlert = page.locator('#username-helper-text');
        this.PasswordAlert = page.locator('#password-helper-text');
    };
 
    async LaunchUrl(URL){
        await this.page.goto(URL);
        await this.LoginButton.click();
    };
 
    async enterTheCredentials(Username, Password){
        await this.UsernameField.fill(Username);
        await this.PasswordField.fill(Password);
        await this.SubmitButton.click();
    }
}
 
module.exports={LoginPage};