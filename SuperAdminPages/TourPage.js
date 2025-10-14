const { expect } = require ('@playwright/test');
class TourPage{
    constructor(page){
        this.page = page;
        this.managementIcon = page.locator('//span[@aria-label="Management"]');
        this.tourModule = page.locator('//a[text()="Tour"]');

        //Two way Tour
        this.twoWayTourText = page.locator('//button[text()="Two Way Tour"]');
        this.addNewTourButton = page.locator('//button[text()="Add New Tour"]');
        this.tourName = page.locator('//input[@id="tour-name"]');
        this.clickAddAliases = page.locator('//button[text()="Add aliases"]');
        this.aliases_1 = page.locator('[id="aliases1"]');
        this.deleteIcon = page.locator('(//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-16zyij1"])[2]/button');
        this.clearIcon = page.locator('[aria-label="Clear"]');
        this.tourType = page.locator('[id="tourType"]');
        this.tourMode = page.locator('//input[@id="trip-mode"]');
        this.fromTime = page.locator('(//button[@aria-label="Choose time"])[1]');
        this.toTime = page.locator('(//button[@aria-label="Choose time"])[1]');
        this.from_Hour = page.locator("(//li[text()='08'])[1]");
        this.from_Minute = page.locator("(//li[text()='30'])");
        this.AM = page.locator('//li[@aria-label="AM"]');
        this.toHour = page.locator("(//li[text()='09'])[1]");
        this.toMinute = page.locator("//li[text()='00']");
        this.PM = page.locator('//li[text()="PM"]');
        this.returnTime = page.locator('(//button[@aria-label="Choose time"])[1]');
        this.returnHour = page.locator('(//li[text()="07"])[1]');
        this.returnMinute = page.locator('//li[text()="15"]');
        this.locationField = page.locator('[id="destinationAddress"]');
        this.saveButton = page.locator('//button[@type="submit"]');
        this.TWT_Toaster = page.locator('//div[text()="Standard tour added successfully"]');
    }

    async navigateToTheTourScreen(){
        await this.managementIcon.click();
        await this.page.waitForTimeout(1000);
        await this.tourModule.click();        
    }

    async addNewTourFor_TWT(TourName, Alias, TourType, TourMode, Location){
        await this.twoWayTourText.click();
        await this.page.waitForTimeout(1000);
        await this.addNewTourButton.click();
        await this.tourName.fill(TourName);
        await this.page.waitForTimeout(1000);
        await this.clickAddAliases.click();
        await this.page.waitForTimeout(1000);
        await this.aliases_1.fill(Alias);
        await this.clickAddAliases.click();
        await this.deleteIcon.click();
        await this.tourType.click();
        await this.page.waitForTimeout(1000);
        await this.clearIcon.click();
        await this.tourType.fill(TourType);
        await this.tourType.press('ArrowDown');
        await this.tourType.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.tourMode.fill(TourMode);                
        await this.page.waitForTimeout(1000);
        await this.tourMode.press('ArrowDown');
        await this.page.waitForTimeout(1000);
        await this.tourMode.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.fromTime.click();
        await this.page.waitForTimeout(1000);
        await this.from_Hour.click();
        await this.page.waitForTimeout(1000);
        await this.from_Minute.click();
        await this.page.waitForTimeout(1000);
        await this.AM.click();
        await this.page.waitForTimeout(2000);
        await this.toTime.click();
        await this.page.waitForTimeout(1000);
        await this.toHour.click();
        await this.page.waitForTimeout(1000);
        await this.toMinute.click();
        await this.page.waitForTimeout(1000);
        await this.AM.click();
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.page.pause();
        await this.returnTime.click();
        await this.returnHour.click();
        await this.returnMinute.click();
        await this.page.waitForTimeout(1000);
        await this.PM.click();
        await this.page.waitForTimeout(1000);
        await this.locationField.fill(Location);
        await this.page.waitForTimeout(5000);
        await this.locationField.press('ArrowDown');
        await this.page.waitForTimeout(1000);
        await this.locationField.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.tourName.fill(TourName);
        await this.saveButton.click();
        await this.page.waitForTimeout(1000);
        const toaster1 = await this.TWT_Toaster.innerText();
        console.log(toaster1);
        //await this.page.pause();
    }

}

module.exports = {TourPage};