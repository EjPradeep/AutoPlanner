const { test } = require ('@playwright/test');
const { LoginPage } = require ('../../SuperAdminPages/LoginPage');
const { PickupPage } = require ('../../SuperAdminPages/PickupPage');

let page;
let context;

test.describe('TS05', async()=>{
    test.beforeAll('Pickup Module', async({browser})=>{
        context = await browser.newContext();
        page = await context.newPage();
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoperator@123');
    })
    
    test('TC001 - Pickup module navigate successfully', async()=>{
        const pickupscreen = new PickupPage(page);
        await pickupscreen.pickupScreen();
    })

    test('TC002 - Verify that the pickup location displays the correct location.', async()=>{
        const pickupscreen = new PickupPage(page);
        await pickupscreen.pickupLocation();
    })

    test('TC003 - Verify that the Rows per page field works properly', async()=>{
        const pickupscreen = new PickupPage(page);
        await pickupscreen.RowsPerPage();
    })
})