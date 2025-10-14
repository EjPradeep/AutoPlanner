const { test } = require ('@playwright/test');
const { LoginPage } = require ('../../SuperAdminPages/LoginPage');
const { TourPage } = require ('../../SuperAdminPages/TourPage');
const { ExcelReader } = require('../../Utils/ExcelReader');

let page;
let context;

test.describe('TS_006', async()=>{
    test.beforeAll('Tour Module', async({browser})=>{
        context = await browser.newContext({
        viewport: { width: 1200, height: 600},
    });

        page = await context.newPage();
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoperator@123');
    })

    test('TC001 - Navigate to the Tour Module', async()=>{
        const tourmodule = new TourPage(page);
        await tourmodule.navigateToTheTourScreen();
    })

    test('TC002 - Add a new Two Way Tour with valid data.', async()=>{
        const tourmodule = new TourPage(page);
        const excelreader = new ExcelReader();
        const TWTData = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const { TourName, Alias, TourType, TourMode, Location } = TWTData[0];
        await tourmodule.addNewTourFor_TWT(TourName, Alias, TourType, TourMode, Location);
    })
})