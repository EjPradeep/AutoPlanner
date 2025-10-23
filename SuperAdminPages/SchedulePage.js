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

        //publish and send - whatsapp and email
        this.clickWhatsapp = page.locator("//p[text()='WhatsApp Notifications']/../../..//preceding-sibling::span");
        this.clickEmail = page.locator("//p[text()='Email Confirmation']/../../..//preceding-sibling::span");
        //after wait for upadate - page navigation
        this.waitForUpdate = page.locator("//button[text()='Update']");
        this.editmobile = page.locator("//input[@placeholder='Mobile Number']");

        //search the guest name 
        this.searchMode = page.locator("//div[@class='MuiStack-root css-j7qwjs']//input");
        //click update
        this.updateBtn = page.locator("//button[text()='Update']");
        //click skip & send
        this.skipAndSend = page.locator("//button[normalize-space()='Skip & Send']");
        //click Publish trip
        this.publishTrip = page.locator("//button[text()='Publish Trip']")
        //wait for publish trip notification
        this.publishTripNotification = page.locator("//div[@class='MuiAlert-message css-1xsto0d']")
        //----------------------------------------------------------------------------------
        //Tour Mode
        this.tourmode = page.locator("//p[text()='Tour Mode']")
        //click burgermenu
        this.burgerIcon = page.locator("//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06']");
        //click update
        this.Updt = page.locator("//li[text()='Update']");
        //update tour mode details
        //agentname
        this.Agentfield = page.locator("#agent-name");
        //Guest name
        this.guestnamefield = page.locator("#guest-name");
        //Contact numer
        this.Contactfield = page.locator("//input[@placeholder='Contact Number']");
        //Adult field
        this.Adultfield = page.locator("//input[@id='adult-count']");
        //Child Field
        this.Childfield = page.locator("//input[@id='child-count']");
        //Reference Field
        this.Referencefield = page.locator("//input[@id='reference-no']");
        //click save btn
        this.saveBtn = page.locator("//button[text()='Save']");
        //group view
        this.clickGroupview = page.locator("//p[text()='Group view']/..//span[@class='MuiSwitch-track css-1ju1kxc']")
        //bookings
        this.bookings = page.locator("//li[text()='Bookings']")



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

    async clickWhatsappTogglebtn() {
        await this.clickWhatsapp.click();
        await this.waitForUpdate.waitFor({ state: 'visible' });
    }

    async editMobileNumber(mobileNo) {
        await this.editmobile.first().fill(mobileNo);
        await this.page.waitForTimeout(500);
    }

    async searchModeName(mode) {
        await this.searchMode.type(mode);
    }

    async clickUpdateBtn() {
        await this.updateBtn.click();
        await this.page.waitForTimeout(1000);
    }
    async clickSkipAndSendBtn() {
        await this.skipAndSend.click();
        await this.waitForwhatsapp.waitFor({ state: 'visible' });
    }

    async clickEmailToggleBtn() {
        await this.clickEmail.click();
    }
    async clickPublishTripBtn() {
        await this.publishTrip.click();
        await this.publishTripNotification.waitFor({ state: 'visible' });
    }
    async clickTourMode() {
        await this.tourmode.click();
    }
    async clickBurgerMenu() {
        await this.burgerIcon.first().hover();
        await this.burgerIcon.first().click();
    }
    async clickUpdate_TourMode() {
        await this.Updt.hover();
        await this.Updt.click();
    }

    async updateTourModeDetails(agentname, guest, contact, adult, child, refer) {
        // await this.Agentfield.fill(agentname);
        // await this.page.keyboard.press('ArrowDown');
        // await this.page.keyboard.press('Enter');

        await this.guestnamefield.fill(guest);
        await this.Contactfield.fill(contact);
        await this.Adultfield.fill(adult);
        // await this.Childfield.fill(child);
        await this.Referencefield.fill(refer);

    }

    async clickSaveBtn() {

        await this.saveBtn.click({ force: true });
    }

    async printGuestName(guestname) {
        const guestLocator = await this.page.locator(`//div[@class='MuiDataGrid-cell MuiDataGrid-cell--textLeft MuiDataGrid-withBorderColor']/div[text()='${guestname}']`);
        const count = await guestLocator.count();

        let details = [];
        for (let i = 0; i < count; i++) {
            const text = await guestLocator.nth(i).textContent();
            details.push(text);
        }
        console.log("Guest Names is:", details);

    }

    async clickGroupViewToggle() {
        await this.clickGroupview.hover()
        await this.clickGroupview.click()
    }

    async clickBookings() {
        await this.bookings.click();
    }
    async clickUpdateAgent(nameOfAgent) {
        await this.Agentfield.fill(nameOfAgent);
        await this.page.locator(`//ul[@class='MuiAutocomplete-groupUl css-15s1ek9']/li[text()='${nameOfAgent}']`).click()
        await this.saveBtn.scrollIntoViewIfNeeded()
    }





















}
module.exports = { SchedulePage };