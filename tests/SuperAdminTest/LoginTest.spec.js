const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');



test.describe('TS01', async () => {


    test('TC_Login_001 - Login with valid credentials', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await page.waitForTimeout(1000);
        await loginpage.enterTheCredentials('atcOperator','Atcoperator@123');
    })
});