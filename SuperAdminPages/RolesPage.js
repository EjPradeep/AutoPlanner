const { expect } = require('@playwright/test');

class RolesPage {

    constructor(page) {
        this.page = page;

        //Dashboard
        this.userManagement = page.locator("//span[@aria-label='User Management']");
        this.rolesTab = page.locator("//div[@aria-label='users tabs']/button").nth(0);
        this.search = page.locator("#filter-input");
        this.addRoleBtn = page.locator("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 MuiGrid-grid-md-5 role-count css-5n7nhl']>button");
        this.getRolesCount = page.locator("//p[@class='MuiTypography-root MuiTypography-body1 role-header css-9l3uo3']/span");

        //Add Role
        this.roleName = page.locator("#rolename");
        this.description = page.locator("#description");
        this.searchModule = page.locator("input[placeholder='Search…']");
        this.nextBtn = page.locator("//button[@aria-label='Go to next page']");
        this.previousBtn = page.locator("//button[@aria-label='Go to previous page']");
        this.addBtn = page.locator("//button[@type='submit']");
        this.cancelBtn = page.locator("//button[text()='Cancel']");
        this.toastMessage = page.locator("//div[@class='MuiAlert-message css-1xsto0d']");
        this.closeIcon = page.locator("[aria-label='Close']");

        //edit
        this.menuBtn = page.locator("button[aria-label='more']");
        this.updateBtn = page.locator("//ul//li").nth(0);
        this.deleteBtn = page.locator("//ul//li").nth(1);

        //confirmation

        this.confirmationMessageYes = page.locator("//button[text()='Yes']");
        this.confirmationMessageNo = page.locator("//button[text()='No']");
        this.errorMessage = page.locator("//div[@class='MuiAlert-message css-1xsto0d']");
        this.fieldErrorMessage = page.locator("#rolename-helper-text");
    }

    async navigateToRoles() {
        await this.userManagement.click();
        await this.page.waitForTimeout(1000);
    }

    async clickAddRoleBtn() {
        await this.addRoleBtn.click();
        await this.page.waitForTimeout(1000);
    }


    async addRoleDetails(roleName, description) {
        await this.roleName.fill(roleName);
        await this.page.waitForTimeout(1000);
        await this.description.fill(description);
        await this.page.waitForTimeout(1000);
    }

    async editRoleDetails(description) {
        await this.description.fill(description);
        await this.page.waitForTimeout(1000);
    }

    async selectCheckbox(checkboxValue) {
        await this.page.locator(`//span[text()='${checkboxValue}']`).click();
        await this.page.waitForTimeout(1000);
    }

    async viewRoleAccess(value) {
        await this.page.locator(`//div[@class='MuiCardContent-root css-1qw96cp']//div[@class='MuiGrid-root card-items css-rfnosa']`).first().click();
        await this.page.waitForTimeout(2000);
    }

    async clickAddBtn() {
        await this.addBtn.click();
        await this.page.waitForTimeout(1000);

    }

    async clickCancelBtn() {
        await this.cancelBtn.click();
        await this.page.waitForTimeout(1000);

    }

    async clickCloseIcon() {
        await this.closeIcon.click();
        await this.page.waitForTimeout(1000);

    }

    async searchValue(value) {
        await this.search.fill(value);
        await this.page.waitForTimeout(1000);

    }

    async searchTheModule(value) {
        await this.searchModule.fill(value);
        await this.page.waitForTimeout(1000);

    }

    async validateToastMessage(value) {
        await this.page.waitForTimeout(1000);
        const getText = await this.toastMessage.textContent();
        if (getText === value) {
            await expect(getText).toBe(value);
            await this.page.waitForTimeout(1000);
        } else {
            await expect(getText).toBe('You can’t delete this role because it is mapped to other users.');
            await this.page.waitForTimeout(1000);
        }

    }

    async validateFieldErrorMessage(value) {
        await this.page.waitForTimeout(1000);
        const getText = await this.fieldErrorMessage.textContent();
        await expect(getText).toBe(value);
        await this.page.waitForTimeout(1000);

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

module.exports = { RolesPage };