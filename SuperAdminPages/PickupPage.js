const {expect} = require ('@playwright/test');
class PickupPage{
    constructor(page){
        this.page = page;
        this.managementIcon = page.locator('//span[@aria-label="Management"]');
        this.pickupModule = page.locator('//a[text()="Pickup"]');
        this.pickupLocationCount = page.locator('//div[@class="pickup-location-heading MuiBox-root css-0"]');
        this.checkBox = page.locator('(//input[@type="checkbox"])[2]');
        this.location = page.locator('(//div[@role="rowgroup"])[2]/div[7]/div[3]/div');
        this.locationIcon = page.locator('//div[@role="button"]');
        this.closeIcon = page.locator('//button[@aria-label="Close"]');
        this.mapCloseIcon = page.locator('//span[@aria-label="Close"]');
        
        //Rows per page
        this.rowsperPage = page.locator('//div[@aria-haspopup="listbox"]');
        this.select_5 = page.locator("//li[text()='5']");
        this.select_15 = page.locator("//li[text()='15']");
        this.select20 = page.locator("//li[text()='20']");
        this.randomPage = page.locator('//ul[@class="MuiPagination-ul css-nhb8h9"]/li[5]/button');
        this.nextPage = page.locator('//button[@aria-label="Go to next page"]');
        this.previousPage = page.locator('//button[@aria-label="Go to previous page"]');
    }

    async pickupScreen(){
        await this.managementIcon.click();
        await this.page.waitForTimeout(1000);
        await this.pickupModule.click();
        await this.page.waitForTimeout(1000);
        const locationCount = await this.pickupLocationCount.innerText();
        console.log(locationCount);
    }

    async pickupLocation(){
        await this.checkBox.click();
        await this.page.waitForTimeout(2000);
        await this.checkBox.click();
        await this.page.waitForTimeout(1000);
        await this.location.click();
        await this.page.waitForTimeout(1000);
        await this.locationIcon.click();
        await this.page.waitForTimeout(2000);
        await this.closeIcon.click();
        await this.page.waitForTimeout(1000);
        await this.mapCloseIcon.click();
    }

    async RowsPerPage(){
        await this.page.waitForTimeout(2000);
        await this.rowsperPage.scrollIntoViewIfNeeded();
        await this.rowsperPage.click();
        await this.select_5.click();
        await this.page.waitForTimeout(2000);
        await this.randomPage.click();
        await this.page.waitForTimeout(2000); 
        await this.nextPage.click();
        await this.page.waitForTimeout(2000); 
        await this.previousPage.click();
        await this.page.waitForTimeout(2000); 
        await this.rowsperPage.click();
        await this.page.waitForTimeout(2000);
        await this.select_15.click();
        await this.page.waitForTimeout(2000); 
        await this.rowsperPage.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000); 
    }
    
}
module.exports = {PickupPage};