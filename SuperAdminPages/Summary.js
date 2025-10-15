class SummaryPage {

    constructor(page) {
        this.page = page;

        //Dashboard
        this.BookingsModule = page.locator("//span[@aria-label='Bookings']");
        this.Summarytab = page.locator("//a[text()='Summary']");
        this.calendericon_start = page.locator("(//*[@data-testid='CalendarIcon'])[1]");
        this.selectdate = page.locator(`(//button[@aria-current='date']/following-sibling::button)[1]`);

        this.calendericon_end = page.locator("(//*[@data-testid='CalendarIcon'])[2]")
        this.Filterfield = page.locator("#status");
        this.filterbtn = page.locator("//button[text()='Filter']");
        this.clearfilterbtn = page.locator("//button[text()='Clear filter']");


        this.tourbtn = page.locator("//button[text()='Tours']");
        this.close = page.locator("//*[@class='routes-close-icon iconify iconify--ic']")

        //Vehicle
        this.vehiclebtn = page.locator("//button[text()='Vehicles']");

        //Addexternal
        this.addExternalVehiclebtn = page.locator("//p[text()='Add External Vehicle']");
        //vehicleno
        this.vehicleNumberfield = page.locator("#vehicle-no");
        //Capacity
        this.seatingfield = page.locator("#capacity");
        //drivername
        this.drivernamefield = page.locator("#driver-name");
        //Contact Number
        this.contactnofield = page.locator("//input[@placeholder='Contact Number']");

        this.addvehiclebtn = page.locator("//button[text()='Add Vehicle']")
        this.closevehicletab = page.locator("Add External Vehicle (SIC)")

        this.searchbox = page.locator("//input[@placeholder='Search…']");

        //Guide
        this.guidebtn = page.locator("//button[text()='Guide']");
        //Addguide
        this.addguide = page.locator("(//p[text()='Add Guide'])[1]");
        //Guidename
        this.guidename_field = page.locator("#guide-name");
        //Contact 
        this.contactnumber = page.locator("//input[@placeholder='Contact Number']");
        //hotel
        this.hotelname = page.locator("#hotel-name");
        //Savebtn
        this.savebutton = page.locator("//button[text()='Save']");
        //close
        this.closeicon = page.locator("//*[@class='routes-close-icon iconify iconify--ic']");






    }

    async SummaryModule(filter) {
        await this.BookingsModule.click();
        await this.Summarytab.click();
        await this.calendericon_start.click();
        await this.selectdate.click();
        await this.calendericon_end.click();
        await this.selectdate.click();
        await this.Filterfield.fill(filter)
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }

    async clearfilter() {
        await this.clearfilterbtn.click();
    }

    async Applyfilter() {
        await this.filterbtn.click();
    }
    async ScheduleModule(Schedulebtn) {
        await this.page.locator(`//div[text()='${Schedulebtn}']`).click();
    }

    async selectTab(tab) {
        await this.page.locator(`//p[text()='${tab}']`).click({});
    }
    async searchthedetails(search) {
        await this.searchbox.fill(search);
    }
    async Tour() {
        await this.tourbtn.click();
        await this.page.locator(`(//p[text()='View Details'])[1]`).click();
        await this.close.click();
    }
    async Vehicle(coach, view) {
        await this.vehiclebtn.click();
        await this.page.locator(`//p[text()='${coach}']/../../preceding-sibling::div`).click()
        await this.page.locator(`//p[text()='${view}']/../../following-sibling::div/div/button`).click({ force: true });
    }
    async AddExternalVehicle(vehicle, vehicleNum, Seat, driver, contact) {
        await this.addExternalVehiclebtn.click();
        await this.page.locator(`//button[text()='${vehicle}']`).click();
        await this.vehicleNumberfield.fill(vehicleNum);
        await this.seatingfield.fill(Seat);
        await this.drivernamefield.fill(driver);
        await this.contactnofield.fill(contact);
        await this.addvehiclebtn.click();

    }
    async closevehicle() {
        await this.closevehicletab.click();
    }
    async guide(guidename, number, hotel) {
        await this.guidebtn.click();
        await this.addguide.click()
        await this.guidename_field.fiil(guidename);
        await this.contactnumber.fill(number);
        await this.hotelname.fill(hotel);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        await this.savebutton.click();
    }
    async closeGuide() {
        await this.closeicon.click();
    }

}
module.exports = { SummaryPage };