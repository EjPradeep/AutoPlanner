const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const { RolesPage } = require('../../SuperAdminPages/RolesPage');

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
        const rolesPage = new RolesPage(page);
        await rolesPage.navigateToRoles();

    })

    test('TC002 - add role details', async () => {
        const rolesPage = new RolesPage(page);
        await rolesPage.clickAddRoleBtn();
        await rolesPage.clickCloseIcon();
        await rolesPage.clickAddRoleBtn();
        await rolesPage.clickCancelBtn();
        await rolesPage.clickAddRoleBtn();
        await rolesPage.addRoleDetails("Arun_User", "test the function test the function test the function");
        await rolesPage.searchTheModule('Tour');
        await rolesPage.selectCheckbox('Tour');
        await rolesPage.clickAddBtn();
        await rolesPage.validateToastMessage('New Role Was Created Successfully');
    })

    test('TC003 - edit role details', async () => {
        const rolesPage = new RolesPage(page);
        await rolesPage.searchValue('Arun_User');
        await rolesPage.clickUpdateBtn();
        await rolesPage.editRoleDetails("test the function test the function test the functionality");
        await rolesPage.searchTheModule('driver');
        await rolesPage.selectCheckbox('Driver');
        await rolesPage.clickAddBtn();
        await rolesPage.validateToastMessage('Role updated successfully');
    })

    test('TC004 - view role access', async () => {
        const rolesPage = new RolesPage(page);
         await rolesPage.searchValue('Arun');
        await rolesPage.viewRoleAccess();
        await rolesPage.clickCloseIcon();
    })

    test('TC005 - delete role details', async () => {
        const rolesPage = new RolesPage(page);
        await rolesPage.searchValue('Arun');
        await rolesPage.clickDeleteBtn();
        await rolesPage.clickConfirmationNo();
        await rolesPage.clickDeleteBtn();
        await rolesPage.clickConfirmationYes();
        await rolesPage.validateToastMessage('Role deleted successfully');
    })

    
    test('TC006 - add role details with invalid data', async () => {
        const rolesPage = new RolesPage(page);
        await rolesPage.clickAddRoleBtn();
        await rolesPage.searchTheModule('Tour');
        await rolesPage.selectCheckbox('Tour');
        await rolesPage.clickAddBtn();
        await rolesPage.validateFieldErrorMessage('Enter role name');
        await rolesPage.clickCloseIcon();
    })
    
    test('TC007 - add role details with invalid data', async () => {
        const rolesPage = new RolesPage(page);
        await rolesPage.clickAddRoleBtn();
        await rolesPage.editRoleDetails('test the function');
        await rolesPage.searchTheModule('Tour');
        await rolesPage.selectCheckbox('Tour');
        await rolesPage.clickAddBtn();
        await rolesPage.validateFieldErrorMessage('Description have at least 10 words');
        await rolesPage.clickCloseIcon();
    })
    
    test('TC008 - get roles count', async () => {
        const rolesPage = new RolesPage(page);
       const count= await rolesPage.getRolesCount.textContent();
       console.log('Total roles count is:'+ count);
    })





});