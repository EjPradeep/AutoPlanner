class SchedulePage {
    constructor(page) {
        this.page = page;
        this.BookingsModule = page.locator("//span[@aria-label='Bookings']");
        //wait for livedashboard
        this.waitForDashboard = page.locator("//h4[normalize-space()='Live Dashboard']");
        //wait for animation detach
        this.waitAnimation = page.locator("//div[@class='tab-context animate__animated animate__slideInRight animate__fast MuiBox-root css-dk05i3']")
        //schedule tab
        this.schedule = page.locator("//a[normalize-space()='Scheduled']");
        //wait For action after clicking schedule
        this.waitAction = page.locator("//div[contains(text(),'Action')]");
        //search
        this.search = page.locator("#filter-input");
        //scroll horizontally
        this.horizontalScroll = page.locator("//div[@class='MuiDataGrid-virtualScroller css-1pzb349']")
        //download excel
        this.download = page.locator("//p[text()='Download']");

        // filter
        this.filterClick = page.locator("//button[@aria-label='Filter']//span[@class='MuiTouchRipple-root css-w0pj6f']");
        //click vehicle
        this.vehicle = page.locator("#vehicleNumber")
        //agent click
        this.agent = page.locator("#agentName")
        //tour name
        this.tourname = page.locator("//label[text()='Tour Name']/../div")
        //apply filter
        this.filterapply = page.locator("//button[text()='Filter']");
        //clear filter
        this.clearflt = page.locator("//button[text()='Clear Filter']");
        //close filter
        this.closefltr = page.locator("//*[@class='iconify iconify--weui']")

        //publish and send
        this.publishbtn = page.locator("//button[normalize-space()='Publish & Send']");
        this.waitForwhatsapp = page.locator("//p[normalize-space()='WhatsApp Notifications']");
        //---------------------------------------------------------------------------
 
        //publish and send - whatsapp
        this.clickWhatsapp = page.locator("//p[text()='WhatsApp Notifications']/../../..//preceding-sibling::span");
        //after wait for upadate - page navigation
        this.waitForUpdate = page.locator("//button[text()='Update']");
        this.editmobile = page.locator("//div[@class='row-color-1 MuiDataGrid-row']//input[@placeholder='Mobile Number']");



    }

    async waitForLiveDashboard() {
        await this.waitForDashboard.waitFor({ state: 'visible' });

    }

    async clickBookingsModule() {
        await this.BookingsModule.click();
    }


    async clickSchedule() {
        await this.schedule.click();
    }
    async waitForAction() {
        await this.waitAction.waitFor({ state: 'visible' });
    }
    async scheduleSearch(name) {
        await this.search.type(name);
    }
    async clearScheduleSearch() {
        await this.search.fill('');
    }
    async scrollTripDetails() {
        await this.horizontalScroll.evaluate(el => {
            el.scrollLeft += 1200; // scroll right by 500px
        });
    }

    async downloadExcel() {
        await this.download.click();
    }

    async clickFilter() {
        await this.filterClick.click();
        await this.page.waitForTimeout(1000);
    }

    async clickVehicle() {
        await this.vehicle.click();
        await this.page.waitForTimeout(800);
    }
    async selectVehicleFromList(vehicleNo) {
        await this.page.locator(`//ul[@id='vehicleNumber-listbox']//li[text()='${vehicleNo}']`).click();
        await this.page.waitForTimeout(800);
    }

    async clickAgent() {
        await this.agent.click();
        await this.page.waitForTimeout(800);
    }
    async selectAgentFromList(agentName) {
        await this.page.locator(`//ul[@id='agentName-listbox']//li[text()='${agentName}']`).first().click();
        await this.page.waitForTimeout(800);
    }

    async clickTourName() {
        await this.tourname.click();
        await this.page.waitForTimeout(1000);
    }
    async selectTourNameFromList(tourName) {
        await this.page.locator(`//ul[@id='tourName-listbox']//li[text()='${tourName}']`).first().click();
        await this.page.waitForTimeout(800);
    }
    async clickApplyFilter() {
        await this.filterapply.click();
        await this.page.waitForTimeout(1000);
    }
    async clickClearFilter() {
        await this.clearflt.click();
        await this.page.waitForTimeout(1000);
    }

    async clickCloseFilter() {
        await this.closefltr.click();
        await this.page.waitForTimeout(1000);
    }

    async clickPublishAndSend() {
        await this.publishbtn.click();
        await this.waitForwhatsapp.waitFor({ state: 'visible' });
    }

    async clickWhatsappTogglebtn(){
        await this.clickWhatsapp.click();
        await this.waitForUpdate.waitFor({ state: 'visible' });
    }

    async editMobileNumber(mobileNo){
        await this.editmobile.first().fill(mobileNo);
        await this.page.waitForTimeout(500);
    }










































}
module.exports = { SchedulePage };