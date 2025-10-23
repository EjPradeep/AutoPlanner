class BookingsPage {

    constructor(page) {
        this.page = page;

        //Dashboard
        this.BookingsModule = page.locator("//span[@aria-label='Bookings']");
        this.bookingtab = page.locator("//a[@class='MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected tab css-1q2h7u5']");
        //Add Booking buuton
        this.addbookingbtn = page.locator("//button[text()='Add Booking']");
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
        //Tour Type Field
        this.tourtype = page.locator("//input[@id='trip-type']");
        //Pickup Field
        this.Pickupfield = page.locator("#search-source");
        //drop Field
        this.droplocationfield = page.locator("#search-destination");
        //dateicon
        this.dateicon = page.locator("//button[@aria-label='Choose date']");
        this.selectdate = page.locator(`(//button[@aria-current='date']/following-sibling::button)[1]`);
        //clock icon
        this.clockicon = page.locator("//*[@data-testid='ClockIcon']");
        // Tour Name
        this.tournamefield = page.locator("#configured-route");
        //cancel
        this.cancelbtn_booking = page.locator("//button[text()='Cancel']");
        //save
        this.savebtn_booking = page.locator("//button[text()='Save']");
        //popup message
        this.popmessage = page.locator("//div[@class='MuiAlert-message css-1xsto0d']");


        //Cutoff
        this.cutoffbtn = page.locator("//button[text()='Cutoff Time']");
        //Hours column
        this.Hoursdropdown = page.locator("//label[text()='Hours']/../div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall css-fvipm8']");
        //Min column
        this.MinuDropdown = page.locator("//label[text()='Min']/../div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall css-fvipm8']");
        //Periof column
        this.Perioddropdown = page.locator("//label[text()='Period']/../div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall css-fvipm8']");
        //Cutof
        this.cutoffbtn = page.locator("//button[text()='Cutoff Time']");
        //cancel
        this.cancelbtn_cuttoff = page.locator("//button[text()='Cancel']");
        //save
        this.savebtn_cutoff = page.locator("//button[text()='Save']");



        //Filter
        this.filtericon = page.locator("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium filter-icon css-138143c']")
        //agent
        this.agentfilter = page.locator("#agentname");
        //tour
        this.tournamefilter = page.locator("#route");
        //date
        this.tourdatefilter = page.locator("//*[@data-testid='CalendarIcon']");
        //cancel
        this.cancel_filter = page.locator("//button[text()='Clear Filter']")
        //Applycancel
        this.Applyfilterbtn = page.locator("//button[text()='Filter']")
        //bacl icon
        this.backicon = page.locator("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium filterIconArrow css-1yxmbwk']")


        //Search
        this.search = page.locator("#filter-input");
        this.RLRSearch = page.locator("#search");

        this.SIC_tab = page.locator("//button[text()='SIC']");
        this.TSIC_tab = page.locator("//button[text()='TSIC']");
        this.PVT_tab = page.locator("//button[text()='PVT']");
        this.GRP_tab = page.locator("//button[text()='GRP']");
        this.RLR_tab = page.locator("//button[text()='RLR']");
        this.Menuicon = page.locator("//*[@data-testid='MenuIcon']");

        this.updatebtn = page.locator("//li[text()='Update']");
        this.deletebtn = page.locator("//li[text()='Delete']");

        this.yes_delete = page.locator("//button[text()='Yes']");
        this.no_delete = page.locator("//button[text()='No']");


        //Import
        this.Importbtn = page.locator("(//button[text()='Import'])[1]");
        this.clickupload = page.locator("//div[text()='Click to Upload file']");

        this.no_import = page.locator("//button[text()='No']");
        this.yes_import = page.locator("//button[text()='Yes']");
        this.Cancelimport = page.locator("//button[text()='Cancel']");
        this.upload_importbtn = page.locator("(//button[text()='Import'])[2]");
        //Click Close
        this.close = page.locator("//button[text()='Close']");




    }
    async Bookings(agentname, guest, contact, adult, child, refer, tour) {
        await this.BookingsModule.click()
        await this.bookingtab.click();
        await this.addbookingbtn.click();

        await this.Agentfield.fill(agentname);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        await this.guestnamefield.fill(guest);
        await this.Contactfield.fill(contact);
        await this.Adultfield.fill(adult);
        await this.Childfield.fill(child);
        await this.Referencefield.fill(refer);

        await this.tourtype.fill(tour);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
    async PVTandGRP(pickup, routetype) {

        await this.Pickupfield.fill(pickup);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter')

        await this.page.locator(`//span[text()='${routetype}']/../span/input`).click();
    }
    async aftercustomorstandard(hour, min, buffertime1, buffertime2) {
        await this.dateicon.click();
        await this.selectdate.click()
        await this.page.locator(`//span[text()='${hour}']`).click({ force: true });
        await this.page.locator(`//span[text()='${min}']`).click({ force: true });

        await this.clockicon.click();
        await this.page.locator(`(//li[text()='${buffertime1}'])[1]`).click();
        await this.page.locator(`(//li[text()='${buffertime2}'])[2]`).click();
        await this.page.keyboard.press('Enter');
    }
    async standard(tourname) {
        await this.tournamefield.fill(tourname)
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

    }
    async custom(drop) {

        await this.droplocationfield.fill(drop);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter')
    }

    async SICandTSIC(pickup, tourname) {

        await this.Pickupfield.fill(pickup);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        await this.tournamefield.fill(tourname)
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        await this.dateicon.click();
        await this.selectdate.click();


    }
    async clickcancel_booking() {
        await this.cancelbtn_booking.click();
    }
    async clicksave_booking() {
        await this.savebtn_booking.click();
        //const text = await this.popmessage.textContent();
        //console.log(text)
    }


    async cutoff(hours, min, period) {
        await this.cutoffbtn.click();

        await this.Hoursdropdown.click();
        for (let i = 0; i < hours; i++) {
            await this.page.keyboard.press('ArrowUp');
        }
        await this.page.keyboard.press('Enter');


        await this.MinuDropdown.click();
        for (let i = 0; i < min; i++) {
            await this.page.keyboard.press('ArrowUp')
        }
        await this.page.keyboard.press('Enter');

        await this.Perioddropdown.click();
        for (let i = 0; i < period; i++) {
            await this.page.keyboard.press('ArrowUp')
        }
        await this.page.keyboard.press('Enter');
    }
    async clickcancel_cutoff() {
        await this.cancelbtn_cuttoff.click();
    }
    async clicksave_cutoff() {
        await this.savebtn_cutoff.click();
        //const text = await this.popmessage.textContent();
        //console.log(text)

    }


    async filter(agent, tourname) {
        await this.filtericon.click();

        await this.agentfilter.fill(agent);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        await this.tournamefilter.fill(tourname);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');


        await this.dateicon.click();
        await this.selectdate.click();

    }
    async clickclearfilter() {
        await this.cancel_filter.click();
        await this.backicon.click();
        await this.page.waitForTimeout(2000);
    }
    async Applyfilter() {
        await this.Applyfilterbtn.click();
        await this.backicon.click();

    }
    async searchSIC(tourname) {
        await this.SIC_tab.click();
        await this.search.fill(tourname);
        await this.page.locator(`(//p[text()='View Bookings'])[1]`).click();
        await this.page.waitForTimeout(2000);
        //await this.Menuicon.click();

    }
    async updatethebookings(guest) {
        await this.updatebtn.click();
        await this.guestnamefield.fill(guest);
        await this.cancelbtn_booking.click();
        await this.Menuicon.click();

    }
    async canceldeletethebooking() {
        await this.deletebtn.click();
        await this.no_delete.click();
    }
    async Deletethebooking() {
        await this.deletebtn.click();
        await this.yes_delete.click();
    }

    async searchTSIC(tourname) {
        await this.TSIC_tab.click();
        await this.search.fill(tourname);
        await this.page.locator(`(//p[text()='View Bookings'])[1]`).click();
        await this.page.waitForTimeout(2000);
        //await this.Menuicon.click();

    }
    async searchPVT(tourname) {
        await this.PVT_tab.click();
        await this.search.fill(tourname);
        await this.page.waitForTimeout(2000);
        //await this.Menuicon.click();

    }
    async searchGRP(tourname) {
        await this.GRP_tab.click();
        await this.search.fill(tourname);
        await this.page.waitForTimeout(2000);
        await this.Menuicon.click();

    }
    async searchRLR(tourname) {
        await this.RLR_tab.click();
        await this.RLRSearch.fill(tourname);

    }
    async import(filepath) {
        await this.Importbtn.click();
        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.clickupload.click()
        ]);
        await fileChooser.setFiles(filepath);

    }
    async cancel_import(){
        await this.no_import.click();
        await this.Cancelimport.click();


    }
    async Saveimport(){
        await this.yes_import.click();
        await this.upload_importbtn.click();
        await this.close.click();
    }
    
}


module.exports = { BookingsPage };