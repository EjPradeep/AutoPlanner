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

        this.errorMessage = page.locator("//div[@class='MuiAlert-message css-1xsto0d']");
        this.fieldErrorMessage = page.locator("#username-helper-text");
    };
 
    async LaunchUrl(URL){
        await this.page.goto(URL);
        await this.page.waitForTimeout(1000);
        await this.LoginButton.click();
    };
 
    async enterTheCredentials(Username, Password){
        await this.UsernameField.fill(Username);
         await this.page.waitForTimeout(1000);
        await this.PasswordField.fill(Password);
         await this.page.waitForTimeout(1000);
        await this.SubmitButton.click();
         await this.page.waitForTimeout(1000);
    }

    async validationMessage(message){
       const getText= await this.errorMessage.textContent();
       await expect(getText).toContain(message);
    }

    async fieldvalidationErrorMessage(message){
       const getText= await this.fieldErrorMessage.textContent();
       await expect(getText).toContain(message);
    }

}
 
module.exports={LoginPage};