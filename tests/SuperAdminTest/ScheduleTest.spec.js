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


    test.skip('TC003 - Filter the scheduled Trips', async () => {

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
        await page.waitForTimeout(1000);
        await sched.scrollTripDetails();
        await page.waitForTimeout(500);
        await sched.clickClearFilter();
        await page.waitForTimeout(2000);
        await sched.clickCloseFilter();

    })

    test.skip('TC004 - Publish and Send - whatsapp and Email', async () => {


        const excelReader = new ExcelReader();
        const scheduleData = await excelReader.readExcel("D:/excel/YaantracData.xlsx", "scheduleTest");
        const sched = new SchedulePage(page);
        //from excel
        const mobilenumber = (scheduleData[0].mobileno)
        await sched.clickPublishAndSend();
        await sched.clickWhatsappTogglebtn();

        //from excel
        const modeName = (scheduleData[0].mode)
        await sched.searchModeName(modeName)
        await page.waitForTimeout(800);
        //scenario 1 --> click update btn
        await sched.editMobileNumber(mobilenumber);
        await page.waitForTimeout(1000);
        await sched.clickUpdateBtn();
        //scenario 1 --> click skip & send btn without edit mobile number
        await sched.editMobileNumber(mobilenumber);
        await page.waitForTimeout(1000);
        await sched.clickSkipAndSendBtn();
        await page.waitForTimeout(1000);
        await sched.clickEmailToggleBtn();
        await sched.clickPublishTripBtn();
        await page.waitForTimeout(1000);

    })

    test('TC004 - Tour Mode', async () => {


        const excelReader = new ExcelReader();
        const scheduleData = await excelReader.readExcel("D:/excel/YaantracData.xlsx", "scheduleTest");
        const sched = new SchedulePage(page);

        await sched.clickTourMode();
        //from excel
        const agent = (scheduleData[0].tourAgentName)
        await sched.scheduleSearch(agent);
        await sched.clickBurgerMenu();

        await sched.clickUpdate_TourMode();


        //update details

        //from excel
        // const { nameOfAgent } = scheduleData[0];
        // await sched.clickUpdateAgent(nameOfAgent);
        const { agentn, guest, contact, adult, child, refer } = scheduleData[0];
        await sched.updateTourModeDetails(agentn, guest, contact, adult, child, refer);
        await page.waitForTimeout(1000)

        //from excel
        // const vehicleNo = (scheduleData[1].vehicleNumber)
        // await sched.selectVehicleFromList(vehicleNo);
        await sched.clickSaveBtn();
        await page.waitForTimeout(2000)
        //from excel
        // const printGuestName = (scheduleData[0].printGuest)
        // await sched.printGuestName(printGuestName);
        await sched.clickGroupViewToggle();
        // await sched.waitForAction();

    })

    test('TC005 - Tour Mode - group view', async () => {


        const excelReader = new ExcelReader();
        const scheduleData = await excelReader.readExcel("D:/excel/YaantracData.xlsx", "scheduleTest");
        const sched = new SchedulePage(page);

        await sched.clickBurgerMenu();
        await sched.clickBookings();
        await sched.waitForAction();
        await page.waitForTimeout(1000)
        await sched.clickBurgerMenu();
        await sched.clickUpdate_TourMode();
        //from excel 
        // const { nameOfAgent } = scheduleData[1];
        // await sched.clickUpdateAgent(nameOfAgent);
        const { agentn, guest, contact, adult, child, refer } = scheduleData[0];
        await sched.updateTourModeDetails(agentn, guest, contact, adult, child, refer);



    })























})