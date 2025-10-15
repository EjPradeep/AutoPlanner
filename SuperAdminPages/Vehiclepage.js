exports.VehiclePage = class VehiclePage {
    constructor(page) {
        this.page = page;
        this.managementIcon = page.locator('//span[@aria-label="Management"]');
        this.vehicleModule = page.locator('//a[text()="Vehicle"]');

        //Add Vehicle
        this.addvehiclebutton = page.locator('//button[text()="Add Vehicle"]');
        this.vehicle_num = page.locator("#vehicleNumber")
        this.vehicle_type = page.locator("#vehicle-type")
        this.speed = page.locator("//p[normalize-space()='Avg Speed']/../following-sibling::div//input[@type='range']")
        this.abseating = page.locator("#absoluteSeating")
        this.Prefseating = page.locator("#seating")
        this.tourmode = page.locator("//input[@placeholder='Tour mode']")

        //Tracking - Yes
        this.imei = page.locator("#imeiNumber")
        this.sim = page.locator("#simNumber")
        this.planid = page.locator("#planId")
        this.vehiclemake = page.locator("#vehicleMake")
        this.vehiclemodel = page.locator("#vehicleModel")
        this.freeway = page.locator("//p[normalize-space()='Freeway Limit']/../following-sibling::div//input[@type='range']")
        this.nonfreeway = page.locator("//p[normalize-space()='Non-Freeway']/../following-sibling::div//input[@type='range']")

        //Upadte
        this.update = page.locator("//li[normalize-space()='Update']")
        this.deactivate = page.locator("//li[normalize-space()='Deactivate']")
        this.delete = page.locator("//li[normalize-space()='Delete']")
       
       
        //search
        this.search = page.locator("//input[@id='filter-input']")

        //Cancel and save

        this.cancel = page.locator("//button[text()='Cancel']")
        this.save = page.locator("//button[text()='Save']")
    }

    async navigateToTheVehicleScreen() {
        await this.managementIcon.click();
        await this.page.waitForTimeout(1000);
        await this.vehicleModule.click();
    }
    async AddVehicleButton() {

        await this.addvehiclebutton.waitFor({ state: 'visible' })
        await this.addvehiclebutton.click();

    }
    async VehicleNum(num) {

        await this.vehicle_num.waitFor({ state: 'visible' })
        await this.vehicle_num.fill(num);
        await this.page.waitForTimeout(500);

    }
    async Tracking(track) {


        const tracking = this.page.locator(`//span[normalize-space()='${track}']`)
        await tracking.click();
        await this.page.waitForTimeout(500);

    }
    async VehicleType(type) {
        await this.vehicle_type.waitFor({ state: 'visible' })
        await this.vehicle_type.fill(type);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }
    async SpeedConfiguration() {
        await this.speed.click();


        // await this.speed.evaluate(el => {
        //     el.value = 100;
        //     el.dispatchEvent(new Event('input', { bubbles: true }));
        //     el.dispatchEvent(new Event('change', { bubbles: true }));
        // });
    }
    async AbsoluteSeating(num) {
        await this.page.waitForTimeout(1000);

        await this.abseating.waitFor({ state: 'visible' })
        await this.abseating.click();
        await this.page.waitForTimeout(1000);

        await this.abseating.fill(num, { force: true });

        await this.page.waitForTimeout(500);
    }
    async PreferredSeating(num) {
        await this.Prefseating.waitFor({ state: 'visible' })
        await this.Prefseating.fill(num);
        await this.page.waitForTimeout(500);
    }
    async TourMode(mode) {

        await this.tourmode.waitFor({ state: 'visible' })
        await this.page.waitForTimeout(1000);
        await this.tourmode.scrollIntoViewIfNeeded()
        await this.tourmode.click();

        await this.tourmode.fill(mode);
        await this.page.waitForTimeout(2000);

        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }

    //Traking-Yes
    async IMEI_Num(mode) {
        await this.imei.waitFor({ state: 'visible' })
        await this.imei.fill(mode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }
    async SIM_Num(mode) {
        await this.sim.waitFor({ state: 'visible' })
        await this.sim.fill(mode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }
    async Plan_Id(mode) {
        await this.planid.waitFor({ state: 'visible' })
        await this.planid.fill(mode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }
    async VehicleMake(mode) {
        await this.planid.waitFor({ state: 'visible' })
        await this.planid.fill(mode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }
    async VehicleModel(mode) {
        await this.planid.waitFor({ state: 'visible' })
        await this.planid.fill(mode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }
    async ManufacturedYear(mode) {
        await this.planid.waitFor({ state: 'visible' })
        await this.planid.fill(mode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }
    async SubType(mode) {
        await this.planid.waitFor({ state: 'visible' })
        await this.planid.fill(mode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);

    }
    async Freeway() {
        await this.freeway.waitFor({ state: 'visible' })
        await this.freeway.evaluate(el => el.value = 55);
        await this.freeway.dispatchEvent('input');
    } async NonFreeway() {
        await this.nonfreeway.waitFor({ state: 'visible' })
        await this.nonfreeway.evaluate(el => el.value = 55);
        await this.nonfreeway.dispatchEvent('input');
    }

    async No_Tracking(Vnum, Track, type, abs, pfs, mode) {
        await this.VehicleNum(Vnum)
        await this.Tracking(Track)
        await this.VehicleType(type)
        await this.SpeedConfiguration()
        await this.AbsoluteSeating(abs)
        await this.PreferredSeating(pfs)
        await this.TourMode(mode)
    }
    async Yes_Tracking(Vnum, Track, imei, sim, VM, VMO, MY, ST, type, abs, pfs, mode) {
        await this.VehicleNum(Vnum)
        await this.Tracking(Track)
        await this.IMEI_Num(imei)
        await this.SIM_Num(sim)
        await this.VehicleMake(VM)
        await this.VehicleModel(VMO)
        await this.ManufacturedYear(MY)
        await this.SubType(ST)
        await this.Freeway()
        await this.NonFreeway()

        await this.VehicleType(type)
        await this.SpeedConfiguration()
        await this.AbsoluteSeating(abs)
        await this.PreferredSeating(pfs)
        await this.TourMode(mode)
    }
    async Active(vehicle) {

        const active = this.page.locator(`//div[contains(text(),'${vehicle}')]/../preceding-sibling::div[@data-field='isActive']//*[@class='iconify iconify--carbon']`)
        await active.waitFor({ state: 'visible' })

        await active.click({ force: true });

        await this.page.waitForTimeout(500);

    }
    async Menu(vehicle) {

        const Menu = this.page.locator(`//div[contains(text(),'${vehicle}')]/../preceding-sibling::div[@data-field='actions']//*[@data-testid='MenuIcon']`)
        await Menu.waitFor({ state: 'visible' })

        await Menu.click({ force: true });

        await this.page.waitForTimeout(500);

    }

    async Update() {
        await this.update.waitFor({ state: 'visible' })

        await this.update.click();
        await this.page.waitForTimeout(500);

    }

    async Deactivate_Yes() {

        await this.deactivate.waitFor({ state: 'visible' })


        await this.deactivate.click();
        await this.Yes.click();
        await this.page.locator("//button[text()='Yes']").click();
        await this.page.waitForTimeout(500);

    }
    async Deactivate_No() {

        await this.deactivate.waitFor({ state: 'visible' })
        await this.deactivate.click();
        await this.No.click();

        await this.page.waitForTimeout(500);

    } 

    async Delete_Yes() {

        await this.delete.waitFor({ state: 'visible' })
        await this.delete.click();

        await this.Yes.click();
        await this.page.waitForTimeout(500);
    } async Delete_No() {

        await this.delete.waitFor({ state: 'visible' })
        await this.delete.click();
        await this.No.click();


        await this.page.waitForTimeout(500);
    }
    async Search(search) {
        await this.search.waitFor({ state: 'visible' })

        await this.search.fill(search);
        await this.page.waitForTimeout(500);

    }
    async Cancel() {

        await this.cancel.click();
        await this.page.waitForTimeout(500);

    }
    async Save() {

        await this.save.click();
        const load = this.page.locator("//div[@class='MuiDataGrid-row Mui-hovered']")
        await load.waitFor({ state: 'visible' })

    } async Yes() {
        const Yes = await this.page.locator("//button[text()='Yes']")
        await Yes.waitFor({ state: 'visible' })
        await this.page.waitForTimeout(1000);
        await Yes.click()
    }
    async No() {
        const No = await this.page.locator("//button[text()='No']")
        await No.waitFor({ state: 'visible' })
        await this.page.waitForTimeout(1000);
        await No.click()
    }
}