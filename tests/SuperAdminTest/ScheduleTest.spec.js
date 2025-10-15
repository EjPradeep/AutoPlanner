const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const { BookingsPage } = require('../../SuperAdminPages/BookingsPage');
const { SchedulePage } = require('../../SuperAdminPages/SchedulePage');
import { ExcelReader } from '../../Utils/ExcelReader';

let context;
let page;



test.describe.serial('TS01 - Login', async () => {

    test('TC001 - Reports Module', async ({ browser }) => {
        context = await browser.newContext({
            // viewport: { width: 1200, height: 600 },
            geolocation: { latitude: 12.939965304673995, longitude: 80.11990807936198 },
            permissions: ['geolocation'],
        })
        page = await context.newPage();
        const loginpage = new LoginPage(page);
        const excelReader = new ExcelReader();
        const logindata = await excelReader.readExcel("D:/excel/YaantracData.xlsx", "Login");

        const { Url, Username, Password } = logindata[0];
        await loginpage.LaunchUrl(Url);
        await loginpage.enterTheCredentials(Username, Password);
    })

    test('TC002 - Navigate to schedule Module', async () => {

        const excelReader = new ExcelReader();
        const scheduleData = await excelReader.readExcel("D:/excel/YaantracData.xlsx", "scheduleTest");

        const sched = new SchedulePage(page);
        await sched.waitForLiveDashboard();
        await sched.clickBookingsModule();
        await sched.clickSchedule();
        await sched.waitForAction();
        await sched.downloadExcel();
        //from excel
        const searchTripName = (scheduleData[0].search)
        await sched.scheduleSearch(searchTripName);
        await page.waitForTimeout(2000);
        await sched.scrollTripDetails();
        await sched.clearScheduleSearch();
        await page.waitForTimeout(2000);


    })

    test('TC003 - Filter the scheduled Trips', async () => {

        const excelReader = new ExcelReader();
        const scheduleData = await excelReader.readExcel("D:/excel/YaantracData.xlsx", "scheduleTest");
        const sched = new SchedulePage(page);
        //from excel
        const vehicleNo = (scheduleData[0].vehicleNumber)

        await sched.clickFilter();
        await sched.clickVehicle();
        await sched.selectVehicleFromList(vehicleNo);
        await page.waitForTimeout(200);
        await sched.clickAgent();
        //from excel
        const agent = (scheduleData[0].agentName)
        await sched.selectAgentFromList(agent);
        await page.waitForTimeout(200);
        await sched.clickTourName();
        //from excel
        const tourname = (scheduleData[0].tour)
        await sched.selectTourNameFromList(tourname);
        await page.waitForTimeout(1000);
        await sched.clickApplyFilter()
        await page.waitForTimeout(2000);
        await sched.scrollTripDetails();
        await page.waitForTimeout(500);
        await sched.clickClearFilter();
        await page.waitForTimeout(2000);
        await sched.clickCloseFilter();

    })

    test('TC004 - Publish and Send - whatsapp', async () => {


        const excelReader = new ExcelReader();
        const scheduleData = await excelReader.readExcel("D:/excel/YaantracData.xlsx", "scheduleTest");
        const sched = new SchedulePage(page);
        //from excel
        const mobilenumber = (scheduleData[0].mobileno)
        await sched.clickPublishAndSend();
        await sched.clickWhatsappTogglebtn();
        await sched.editMobileNumber(mobilenumber);
       


    })































})