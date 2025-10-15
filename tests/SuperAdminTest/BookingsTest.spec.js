const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const { BookingsPage } = require('../../SuperAdminPages/BookingsPage');
import { ExcelReader } from '../../Utils/ExcelReader';

let context;
let page;



test.describe.serial('TS01 - Login', async () => {

    test('TC001 - Reports Module', async ({ browser }) => {
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

    test('TC002 - Navigate to User Management', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { AgentName, GuestName, Contact, Adult, Child, Reference } = bookingdata[0];
        const { TourType } = bookingdata[0];//0-pvt,1-sic,2-tsic,3-grp
        await bookingsPage.Bookings(AgentName, GuestName, Contact, Adult, Child, Reference, TourType);


    })
    test('TC003 - Pvt and GRP', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { Pickup} = bookingdata[0];
        const{RouteType}=bookingdata[1];  //0-custom, 1-standard
        await bookingsPage.PVTandGRP(Pickup, RouteType);

     
    })
    test.skip('TC004 - if it is Custom', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { DropLocation} = bookingdata[0];
        await bookingsPage.custom(DropLocation);
    })
    test('TC005 - id it is standard', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { TourNameStandard} = bookingdata[0];
        await bookingsPage.standard(TourNameStandard);
    })
     test('TC006 - after custom or standard', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { Hour, StartMinute,Bufferstart, BufferEnd} = bookingdata[0];
        await bookingsPage.aftercustomorstandard(Hour, StartMinute,Bufferstart, BufferEnd);

    })
    test.skip('TC007 - SIC AND TSIC', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { Pickup, TourName } = bookingdata[0];
         //const { Date } = bookingdata[14];
        await bookingsPage.SICandTSIC(Pickup, TourName);
    })
    test('TC008 - Cancel button', async () => {
        const bookingsPage = new BookingsPage(page);
        await bookingsPage.clickcancel_booking();
    })
     test.skip('TC009 - save button', async () => {
        const bookingsPage = new BookingsPage(page);
        await bookingsPage.clicksave_booking();
    })
     test('TC010 - Cutoff button', async () => {
        const bookingsPage = new BookingsPage(page);
        await bookingsPage.cutoff(1,2,3);
    })
     test('TC011 - Cancel button cutoff', async () => {
        const bookingsPage = new BookingsPage(page);
        await bookingsPage.clickcancel_cutoff();
    })
     test.skip('TC012 - save button cutoff', async () => {
        const bookingsPage = new BookingsPage(page);
        await bookingsPage.clicksave_cutoff();
    })
    test('TC013 - filter', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { AgentName, TourName } = bookingdata[0];
         //const { Date } = bookingdata[14];
        await bookingsPage.filter(AgentName,TourName);
    });
    test('TC014 - Cancel Filter', async () => {
        const bookingsPage = new BookingsPage(page);
        await bookingsPage.clickcancelfilter();
    })
     test.skip('TC015 - filter ', async () => {
        const bookingsPage = new BookingsPage(page);
        await bookingsPage.Applyfilter();
    })
     test('TC016 - search sic', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { SICSearch} = bookingdata[0];
        await bookingsPage.searchSIC(SICSearch);
    })
    test('TC017 - Update', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { GuestName} = bookingdata[0];
        await bookingsPage.updatethebookings(GuestName);
    })
    test('TC018 - delete', async () => {
        const bookingsPage = new BookingsPage(page);
        const excelReader = new ExcelReader();
        const bookingdata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Bookings");
        const { GuestName} = bookingdata[0];
        await bookingsPage.updatethebookings(GuestName);
    })
})