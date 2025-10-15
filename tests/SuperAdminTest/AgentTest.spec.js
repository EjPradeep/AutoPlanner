const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const { AgentPage } = require('../../SuperAdminPages/AgentPage');

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
        const agentPage = new AgentPage(page);
        await agentPage.navigateToAgent();

    })

    test('TC002 - select Agent Admin Tab', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.navigateToAgentAdminTab();

    })

    test('TC003 - add agent admin details', async () => {
       const agentPage = new AgentPage(page);
        await agentPage.clickAddAgentAdminBtn();
        await agentPage.clickCancelBtn();
        await agentPage.clickAddAgentAdminBtn();
        await agentPage.addAgentAdminDetails("akr","arunkumar","+65 63300056","arunmuthu24@medyaan.com","Rate Card 2","India","www.yaantrac.com", "arunkum", "Arun@123", "Arun@123");
        await agentPage.passwordEyeIcon.click();
        await agentPage.passwordEyeIcon.click();
        await agentPage.confirmPasswordEyeIcon.click();
        await agentPage.confirmPasswordEyeIcon.click();
        await agentPage.clickSaveBtn();
        await agentPage.validateToastMessage('User onboarded successfully');
        await page.waitForTimeout(2000);
    })

    test('TC004 - edit agent admin details', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.searchValue('');
        await agentPage.searchValue('arunkumar');
        await agentPage.clickUpdateBtn();
        await agentPage.editAgentAdminDetails("akr", "65300756", "aru24@medyaan.com","Rate Card 1","Singapore","www.yaantrac.com");
        await agentPage.clickSaveBtn();
        await agentPage.validateToastMessage('User profile updated successfully');
        await page.waitForTimeout(2000);
    })

    test('TC005 - delete Operation admin details', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.searchValue('');
        await agentPage.searchValue('arunkumar');
        await agentPage.clickDeleteBtn();
        await agentPage.clickConfirmationNo();
        await agentPage.clickDeleteBtn();
        await agentPage.clickConfirmationYes();
        await agentPage.validateToastMessage('User profile deleted successfully');
        await page.waitForTimeout(2000);
    })


    test('TC006 - add agent admin details with invalid data', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.clickAddAgentAdminBtn();
        await agentPage.clickSaveBtn();
        const getErrorMessage = await agentPage.validateFieldErrorMessage();
        console.log('Error messages are:' + getErrorMessage);
        await agentPage.clickCancelBtn();
        await page.waitForTimeout(2000);
    })


    test('TC007 - get agent admin roles count', async () => {
        const agentPage = new AgentPage(page)
        const count = await agentPage.getRolesCount.textContent();
        console.log('Total roles count is:' + count);
        await page.waitForTimeout(2000);
    })

    test('TC008 - select rate card Tab', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.navigateToRateCardTab();
        await page.waitForTimeout(2000);
    })

    test('TC009 - add rate card details', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.clickAddRateCardBtn();
        await agentPage.clickCancelBtn();
        await agentPage.clickAddRateCardBtn();
        await agentPage.closeIconRateCard.click();
        await agentPage.clickAddRateCardBtn();
        await agentPage.addRateCardDetails("Diwali Special Ratecard","India");
        await agentPage.clickTSICTab();
        await agentPage.addPriceDetails('TSIC UNIVERSAL STUDIOS','120');
        await agentPage.clickSaveBtn();
        await agentPage.validateToastMessage('User onboarded successfully');
        await page.waitForTimeout(2000);
    })

    test('TC010 - edit rate card details', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.searchValue('');
        await agentPage.searchValue('Rate Card 2');
        await agentPage.clickUpdateBtn();
        await agentPage.editRateCardDetails("Newyear Card", "Algeria");
         await agentPage.clickTSICTab();
        await agentPage.editPriceDetails("BATTLEFIELD TOUR","80");
        await agentPage.clickCancelBtn();
        await agentPage.validateToastMessage('User profile updated successfully');
        await page.waitForTimeout(2000);
    })

    test('TC011 - delete Operation user details', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.searchValue('');
        await agentPage.searchValue('Rate Card 2');
        await agentPage.clickDeleteBtn();
        await agentPage.clickConfirmationNo();
        await agentPage.clickDeleteBtn();
        await agentPage.clickConfirmationYes();
        await agentPage.validateToastMessage('User profile deleted successfully');
        await page.waitForTimeout(2000);
    })

    test('TC012 - add rate card details with invalid data', async () => {
        const agentPage = new AgentPage(page);
        await agentPage.clickAddRateCardBtn();
        await agentPage.clickSaveBtn();
        const getErrorMessage = await agentPage.validateFieldErrorMessage();
        console.log('Error messages are:' + getErrorMessage);
        await agentPage.clickCancelBtn();
        await page.waitForTimeout(2000);
    })

    test('TC013 - get ratecard count', async () => {
        const agentPage = new AgentPage(page)
        const count = await agentPage.getRolesCount.textContent();
        console.log('Total roles count is:' + count);
        await page.waitForTimeout(2000);
    })





});