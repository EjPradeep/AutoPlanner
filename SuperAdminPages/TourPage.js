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
        this.tourMode = page.locator('[id="trip-mode"]');
        this.fromTime = page.locator('(//button[@aria-label="Choose time"])[1]');
        this.toTime = page.locator('(//button[@aria-label="Choose time"])[2]');
        this.from_Hour = page.locator("(//li[text()='08'])[1]");
        this.from_Minute = page.locator("(//li[text()='30'])");
        this.AM = page.locator('//li[@aria-label="AM"]');
        this.toHour = page.locator("(//li[text()='09'])[1]");
        this.toMinute = page.locator("//li[text()='00']");
        this.PM = page.locator('//li[text()="PM"]');
        this.returnTime = page.locator('(//button[@aria-label="Choose time"])[3]');
        this.returnHour = page.locator('(//li[text()="07"])[1]');
        this.returnMinute = page.locator('//li[text()="15"]');
        
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
        await this.clickAddAliases.click();
        await this.aliases_1.fill(Alias);
        await this.clickAddAliases.click();
        await this.deleteIcon.click();
        await this.clearIcon.click();
        await this.tourType.fill(TourType);
        await this.tourType.press('ArrowDown');
        await this.tourType.press('Enter');
        await this.tourMode.fill(TourMode);
        await this.tourType.press('ArrowDown');
        await this.tourType.press('Enter');
        await this.fromTime.click();
        await this.from_Hour.click();
        await this.from_Minute.click();
        await this.AM.click();
        await this.toTime.click();
        await this.toHour.click();
        await this.toMinute.click();
        await this.AM.click();
        await this.returnTime.click();
        
        await this.PM.click();

        
    }

}

module.exports = {TourPage};