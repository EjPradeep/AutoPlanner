const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const {SummaryPage } = require('../../SuperAdminPages/Summary');
import { ExcelReader } from '../../Utils/ExcelReader';

let context;
let page;



test.describe.serial('TS01 - Login', async () => {

    test('TC001 - Bookings Module', async ({ browser }) => {
        context = await browser.newContext({
            viewport: { width: 1200, height: 600 },
            geolocation: { latitude: 12.939965304673995, longitude: 80.11990807936198 },
            permissions: ['geolocation'],
        })
        page = await context.newPage();
        const loginpage = new LoginPage(page);
        const excelReader = new ExcelReader();
        const logindata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Login");

        const { Url, Username, Password } = logindata[0];
        await loginpage.LaunchUrl(Url);
        await loginpage.enterTheCredentials(Username, Password);
    })

    test('TC002 - Navigate to Bookings', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
        const { Filter } = summarydata[0];
        await  summaryPage.SummaryModule(Filter);
    })

    test('TC03 - Clear button ', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.clearfilter();
})

 test.skip('TC04 - Apply filter button ', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.Applyfilter();
})

test('TC05 - click  Schedule or Reschedule ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
        const {ScheduleButton} = summarydata[1];  //0-Schedule  1-Reschedule     
         await summaryPage.ScheduleModule(ScheduleButton);
})
test('TC06 - click  Tab', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
         const {Tab} = summarydata[1]; //0-sic,1-tsic,2-Pvt,3-grp
        await summaryPage.selectTab(Tab);
})
test('TC07 - Search', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
         const {Tab} = summarydata[0];//0-sic,1-tsic,2-Pvt,3-grp
        await summaryPage.selectTab(Tab);
})
test('TC08 - Tour ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
        const {TourName} = summarydata[0];
        await summaryPage.Tour(TourName);
})

test('TC09 -  Vehicle  ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
        const {Coaches,View} = summarydata[0];
        await summaryPage.Vehicle(Coaches,View);
})
test('TC10 - After Schedule (Vehicle) ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
        const {Switch} = summarydata[0];
        const {VehicleNumber,Seating,Drivername,ContactNumber} = summarydata[0];
        await summaryPage.AddExternalVehicle(Switch,VehicleNumber,Seating,Drivername,ContactNumber);
})

 test.skip('TC011 - cloase the add extenal vehicale tab ', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.closevehicle();
})
test('TC12 - Guide ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary"); 
        const {GuideName,GuideContact,HotelName} = summarydata[0];
        await summaryPage.guide(GuideName,GuideContact,HotelName);

})
 test.skip('TC013 - Guide close', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.closeGuide();
})
})