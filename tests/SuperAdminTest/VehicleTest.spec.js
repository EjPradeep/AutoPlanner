const { test } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const { VehiclePage } = require('../../SuperAdminPages/Vehiclepage');
const { readExcel } = require('../../Utils/ExcelReader');

let page;
let context;

test.describe.serial('TS_006', async () => {

    const data = readExcel("C:/Autoplanner/AutoPlanner/Test-Data/Autoplanner.xlsx", "Login");

    test.beforeAll('Tour Module', async ({ browser }) => {
        context = await browser.newContext({
            viewport: { width: 1200, height: 600 },
        });
        page = await context.newPage();

        const { URL, Username, Password } = data[0];

        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl(URL);
        await loginpage.enterTheCredentials(Username, Password);
    })

    test.skip('TC001 - Navigate to the Vehicle Module and Create Vehicle', async () => {
    const data = readExcel("C:/Autoplanner/AutoPlanner/Test-Data/Autoplanner.xlsx", "Vehicle");

        const { VehicleNumber, Tracking, VehicleType, AbsoluteSeating, PreferredSeating, TourMode } = data[0];

        const vehicle = new VehiclePage(page);
        await vehicle.navigateToTheVehicleScreen();
        await vehicle.AddVehicleButton();
        await vehicle.No_Tracking(VehicleNumber, Tracking, VehicleType, AbsoluteSeating, PreferredSeating, TourMode);
        await vehicle.Save()


    })
        test.skip('TC002 - Navigate to the Vehicle Module for Update', async () => {
    const data = readExcel("C:/Autoplanner/AutoPlanner/Test-Data/Autoplanner.xlsx", "Vehicle");

        const { VehicleNumber, Tracking, VehicleType, AbsoluteSeating, PreferredSeating, TourMode } = data[1];

        const vehicle = new VehiclePage(page);
        await vehicle.navigateToTheVehicleScreen();
       
        await vehicle.Menu(VehicleNumber);
        await vehicle.Update();
        await vehicle.AbsoluteSeating(AbsoluteSeating);
        await vehicle.Save()

    })
      test.skip('TC003 - Navigate to the Vehicle Module for Deactivate', async () => {
    const data = readExcel("C:/Autoplanner/AutoPlanner/Test-Data/Autoplanner.xlsx", "Vehicle");

        const { VehicleNumber, Tracking, VehicleType, AbsoluteSeating, PreferredSeating, TourMode } = data[1];

        const vehicle = new VehiclePage(page);
        await vehicle.navigateToTheVehicleScreen();
       
        await vehicle.Menu(VehicleNumber);
        await vehicle.Deactivate_No();

    })
       test('TC003 - Navigate to the Vehicle Module for Delete', async () => {
    const data = readExcel("C:/Autoplanner/AutoPlanner/Test-Data/Autoplanner.xlsx", "Vehicle");

        const { VehicleNumber, Tracking, VehicleType, AbsoluteSeating, PreferredSeating, TourMode } = data[1];

        const vehicle = new VehiclePage(page);
        await vehicle.navigateToTheVehicleScreen();
       
        await vehicle.Menu(VehicleNumber);
        await vehicle.Delete_No();

    })
    
})