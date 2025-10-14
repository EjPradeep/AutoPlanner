const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const { OperationTeamPage } = require('../../SuperAdminPages/OperationTeamPage');

let context;
let page;

test.describe('TS01 - Login', async () => {

    test.beforeAll('Reports Module', async ({ browser }) => {
        context = await browser.newContext({
            viewport: { width: 1200, height: 600 },
            geolocation: { latitude: 12.939965304673995, longitude: 80.11990807936198 },
            permissions: ['geolocation'],
        })
        page = await context.newPage();
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoperator@123');
    })

    test('TC001 - Navigate to User Management', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.navigateToOperationTeam();

    })

    test('TC002 - select Operation Admin Tab', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.navigateToOperationAdminTab();

    })

    test('TC003 - add operation admin details', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.clickAddOperationAdminBtn();
        await operationTeamPage.clickCancelBtn();
        await operationTeamPage.clickAddOperationAdminBtn();
        await operationTeamPage.addOperationAdminDetails("aruuthu", "65336756", "arunmuu24@medyaan.com", "arunthu", "Arun@123", "Arun@123");
        await operationTeamPage.passwordEyeIcon.click();
        await operationTeamPage.passwordEyeIcon.click();
        await operationTeamPage.confirmPasswordEyeIcon.click();
        await operationTeamPage.confirmPasswordEyeIcon.click();
        await operationTeamPage.clickSaveBtn();
        await operationTeamPage.validateToastMessage('User onboarded successfully');
        await page.waitForTimeout(2000);
    })

    test('TC004 - edit operation admin details', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.searchValue('');
        await operationTeamPage.searchValue('Arun');
        await operationTeamPage.clickUpdateBtn();
        await operationTeamPage.editOperationAdminDetails("98765435", "arun.r@datayaan.com");
        await operationTeamPage.clickSaveBtn();
        await operationTeamPage.validateToastMessage('User profile updated successfully');
        await page.waitForTimeout(2000);
    })

    test('TC005 - delete Operation admin details', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.searchValue('');
        await operationTeamPage.searchValue('Arun');
        await operationTeamPage.clickDeleteBtn();
        await operationTeamPage.clickConfirmationNo();
        await operationTeamPage.clickDeleteBtn();
        await operationTeamPage.clickConfirmationYes();
        await operationTeamPage.validateToastMessage('User profile deleted successfully');
        await page.waitForTimeout(2000);
    })


    test('TC006 - add operation admin details with invalid data', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.clickAddOperationAdminBtn();
        await operationTeamPage.clickSaveBtn();
        const getErrorMessage = await operationTeamPage.validateFieldErrorMessage();
        console.log('Error messages are:' + getErrorMessage);
        await operationTeamPage.clickCancelBtn();
        await page.waitForTimeout(2000);
    })


    test('TC007 - get admin roles count', async () => {
        const operationTeamPage = new OperationTeamPage(page)
        const count = await operationTeamPage.getRolesCount.textContent();
        console.log('Total roles count is:' + count);
        await page.waitForTimeout(2000);
    })


    test('TC008 - select Operation User Tab', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.navigateToOperationUserTab();
        await page.waitForTimeout(2000);

    })

    test('TC009 - add operation User details', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.clickAddOperationUserBtn();
        await operationTeamPage.clickCancelBtn();
        await operationTeamPage.clickAddOperationUserBtn();
        await operationTeamPage.addOperationUserDetails("ribha", "ARUN", "60004500", "ribha@medyaan.com", "ribhab", "Arun@123", "Arun@123");
        await operationTeamPage.passwordEyeIcon.click();
        await operationTeamPage.passwordEyeIcon.click();
        await operationTeamPage.confirmPasswordEyeIcon.click();
        await operationTeamPage.confirmPasswordEyeIcon.click();
        await operationTeamPage.clickSaveBtn();
        await operationTeamPage.validateToastMessage('User onboarded successfully');
        await page.waitForTimeout(2000);
    })

    test('TC010 - edit operation user details', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.searchValue('');
        await operationTeamPage.searchValue('Ribha');
        await operationTeamPage.clickUpdateBtn();
        await operationTeamPage.editOperationUserDetails("ARUN", "65320083", "ribha.b@dataan.com");
        await operationTeamPage.clickSaveBtn();
        await operationTeamPage.validateToastMessage('User profile updated successfully');
        await page.waitForTimeout(2000);
    })

    test('TC011 - delete Operation user details', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.searchValue('');
        await operationTeamPage.searchValue('Ribha');
        await operationTeamPage.clickDeleteBtn();
        await operationTeamPage.clickConfirmationNo();
        await operationTeamPage.clickDeleteBtn();
        await operationTeamPage.clickConfirmationYes();
        await operationTeamPage.validateToastMessage('User profile deleted successfully');
        await page.waitForTimeout(2000);
    })


    test('TC012 - add operation user details with invalid data', async () => {
        const operationTeamPage = new OperationTeamPage(page);
        await operationTeamPage.clickAddOperationUserBtn();
        await operationTeamPage.clickSaveBtn();
        const getErrorMessage = await operationTeamPage.validateFieldErrorMessage();
        console.log('Error messages are:' + getErrorMessage);
        await operationTeamPage.clickCancelBtn();
        await page.waitForTimeout(2000);
    })


    test('TC013 - get admin roles count', async () => {
        const operationTeamPage = new OperationTeamPage(page)
        const count = await operationTeamPage.getRolesCount.textContent();
        console.log('Total roles count is:' + count);
        await page.waitForTimeout(2000);
    })





});