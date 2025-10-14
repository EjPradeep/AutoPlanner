const { expect } = require('@playwright/test');

class OperationTeamPage {

    constructor(page) {
        this.page = page;

        //Dashboard
        this.userManagement = page.locator("//span[@aria-label='User Management']");
        this.operationTeamTab = page.locator("//div[@aria-label='users tabs']/button").nth(1);
        this.operationAdminTab = page.locator("#custom-tab-0");
        this.operationUserTab = page.locator("#custom-tab-1");
        this.search = page.locator("#filter-input");
        this.addOperationAdminBtn = page.locator("//button[text()='Add Operation Admin']");
        this.addOperationUserBtn = page.locator("//button[text()='Add Operation User']");
        this.getRolesCount = page.locator("//h5[@class='MuiTypography-root MuiTypography-h5 css-17n64l0']/span");

        //Add Operation Admin
        this.addOperationAdminTab = page.locator(".MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.MuiButtonGroup-grouped.MuiButtonGroup-groupedHorizontal.MuiButtonGroup-groupedOutlined.MuiButtonGroup-groupedOutlinedHorizontal.MuiButtonGroup-groupedOutlinedPrimary.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.layout-active.layout-btn.MuiButtonGroup-firstButton.css-79xub");
        this.addOperationUserTab = page.locator(".MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.MuiButtonGroup-grouped.MuiButtonGroup-groupedHorizontal.MuiButtonGroup-groupedOutlined.MuiButtonGroup-groupedOutlinedHorizontal.MuiButtonGroup-groupedOutlinedPrimary.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.layout-btn.MuiButtonGroup-lastButton.css-79xub");
        this.contactPerson = page.locator("#contactperson");
        this.contactNo = page.locator("input[placeholder='Contact Number']");
        this.emailAddress = page.locator("#email");
        this.userName = page.locator("#agentname");
        this.password = page.locator("#password");
        this.passwordEyeIcon = page.locator("#password~div>button");
        this.confirmPassword = page.locator("#confirmPassword");
        this.confirmPasswordEyeIcon = page.locator("#confirmPassword~div>button");
        this.saveBtn = page.locator("//button[@type='submit']");
        this.cancelBtn = page.locator("//button[text()='Cancel']");

        //Add Operation Users
        this.roles = page.locator("#roles");

        //edit and delete 
        this.roles = page.locator("#roles");
        this.menuBtn = page.locator("#button");
        this.updateBtn = page.locator("//ul//li").nth(0);
        this.deleteBtn = page.locator("//ul//li").nth(1);

        //Toast Message
        this.toastMessage = page.locator("//div[@class='MuiAlert-message css-1xsto0d']");
        this.closeIcon = page.locator("[aria-label='Close']");

        //confirmation
        this.confirmationMessageYes = page.locator("//button[text()='Yes']");
        this.confirmationMessageNo = page.locator("//button[text()='No']");
        this.errorMessage = page.locator("//div[@class='MuiAlert-message css-1xsto0d']");
        this.fieldErrorMessage = page.locator("//div[@class='text-field yaantrac MuiBox-root css-0']//p");
    }

    async navigateToOperationTeam() {
        await this.userManagement.click();
        await this.page.waitForTimeout(1000);
        await this.operationTeamTab.click();
        await this.page.waitForTimeout(1000);
    }

    async navigateToOperationAdminTab() {
        await this.page.waitForTimeout(1000);
        await this.operationAdminTab.click();
    }

    async navigateToOperationUserTab() {
        await this.page.waitForTimeout(1000);
        await this.operationUserTab.click();
    }

    async clickAddOperationAdminBtn() {
        await this.addOperationAdminBtn.click();
        await this.page.waitForTimeout(1000);
        await this.addOperationAdminTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickAddOperationUserBtn() {
        await this.addOperationUserBtn.click();
        await this.page.waitForTimeout(2000);
         await this.addOperationUserTab.click();
        await this.page.waitForTimeout(1000);
    }


    async addOperationAdminDetails(contactPerson, contactNo,emailAddress,userName,password,confirmPassword) {
        await this.contactPerson.fill(contactPerson);
        await this.page.waitForTimeout(1000);
        await this.contactNo.fill(contactNo);
        await this.page.waitForTimeout(1000);
        await this.emailAddress.fill(emailAddress);
        await this.page.waitForTimeout(1000);
        await this.userName.fill(userName);
        await this.page.waitForTimeout(1000);
        await this.password.fill(password);
        await this.page.waitForTimeout(1000);
        await this.confirmPassword.fill(confirmPassword);
        await this.confirmPasswordEyeIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async addOperationUserDetails(contactPerson,role, contactNo,emailAddress,userName,password,confirmPassword) {
        await this.contactPerson.fill(contactPerson);
        await this.page.waitForTimeout(1000);
        await this.roles.fill(role);
        await this.page.locator(`//ul[@class='MuiAutocomplete-groupUl css-15s1ek9']/li[contains(text(),'${role}')]`).click();
        await this.page.waitForTimeout(1000);
        await this.contactNo.fill(contactNo);
        await this.page.waitForTimeout(1000);
        await this.emailAddress.fill(emailAddress);
        await this.page.waitForTimeout(1000);
        await this.userName.fill(userName);
        await this.page.waitForTimeout(1000);
        await this.password.fill(password);
        await this.page.waitForTimeout(1000);
        await this.confirmPassword.fill(confirmPassword);
        await this.confirmPasswordEyeIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async editOperationAdminDetails(contactNo,emailAddress) {
        await this.contactNo.fill(contactNo);
        await this.page.waitForTimeout(1000);
        await this.emailAddress.fill(emailAddress);
        await this.page.waitForTimeout(1000);
    }

    async editOperationUserDetails(role,contactNo,emailAddress) {
        await this.roles.fill(role);
        await this.page.locator(`//ul[@class='MuiAutocomplete-groupUl css-15s1ek9']/li[contains(text(),'${role}')]`).click();
        await this.page.waitForTimeout(1000);
        await this.contactNo.fill(contactNo);
        await this.page.waitForTimeout(1000);
        await this.emailAddress.fill(emailAddress);
        await this.page.waitForTimeout(1000);
    }

   

    async clickSaveBtn() {
        await this.saveBtn.click();
        await this.page.waitForTimeout(1000);

    }

    async clickCancelBtn() {
        await this.cancelBtn.click();
        await this.page.waitForTimeout(1000);

    }


    async searchValue(value) {
        await this.search.fill(value);
        await this.page.waitForTimeout(2000);

    }


    async validateToastMessage(value) {
        await this.page.waitForTimeout(1000);
        const getText = await this.toastMessage.textContent();
         await expect(getText).toBe(value);      

    }

    async validateFieldErrorMessage() {
        await this.page.waitForTimeout(1000);
        const count = await this.fieldErrorMessage.count();
        const value=[];
        for (let i = 0; i < count; i++) {
            const getText = await this.fieldErrorMessage.nth(i).textContent();
            value.push(getText);
        }
        return value;

    }

    async clickUpdateBtn() {
        await this.menuBtn.click();
        await this.page.waitForTimeout(1000);
        await this.updateBtn.click();
        await this.page.waitForTimeout(1000);

    }

    async clickDeleteBtn() {
        await this.menuBtn.click();
        await this.page.waitForTimeout(1000);
        await this.deleteBtn.click();
        await this.page.waitForTimeout(1000);

    }

    async clickConfirmationYes() {
        await this.confirmationMessageYes.click();
        await this.page.waitForTimeout(1000);


    }

    async clickConfirmationNo() {
        await this.confirmationMessageNo.click();
        await this.page.waitForTimeout(1000);


    }

}

module.exports = { OperationTeamPage };