const { expect } = require ('@playwright/test');
class ReportsPage{
    constructor(page){
        this.page = page;
        this.reportsIcon = page.locator('//span[@aria-label="Reports"]');
        this.selectReportType = page.locator('[id="select-report"]');
        this.startDate = page.locator('(//button[@aria-label="Choose date"])[1]');
        this.monthYear = page.locator('[class="MuiPickersFadeTransitionGroup-root css-1bx5ylf"]');
        this.selectYear = page.locator("//button[text()='2024']");
        this.previousMonth = page.locator('[title="Previous month"]');
        this.nextMonth = page.locator('//button[@title="Next month"]');
        this.selectDate = page.locator("//button[text()='5']");
        //this.selectPM = page.locator('[title="PM"]');
        //this.selectAM = page.locator('[title="AM"]');
        this.selectTime = page.locator("(//div[@class='MuiClockPointer-thumb css-118whkv'])[1]");
        this.selectMinutes = page.locator('//span[@aria-label="30 minutes"]');
        this.endDate = page.locator('//div[3]//div[1]//div[1]//div[1]//div[1]//button[1]');
        this.selectEndYear = page.locator("//button[text()='2025']");
        this.getReportButton = page.locator("//button[text()='Get Report']");
        this.reportToasterMSG = page.locator("//div[text()='External Vehicle Report generated successfully']");

        //Email
        this.emailButton = page.locator('//button[text()="Mail"]');
        this.emailField = page.locator('[id="e-mail"]');
        this.scrollDown = page.locator('//p[@class="MuiTablePagination-selectLabel css-1chpzqh"]');
        this.documentType = page.locator("#document");
        this.sendMailButton = page.locator('(//button[@type="submit"])[2]');
        this.sendPDFToaster = page.locator('//div[text()="External vehicle report will be sent to rajalakshmi.r@datayaan.com"]');
        this.mailAlertMsg = page.locator('//p[text()="Enter valid email id"]');
        this.cancelButton = page.locator('//div[@class="MuiBox-root css-1czis7r"]/button[2]');
        this.AlertMsg_Email = page.locator('//p[text()="Email Id is required"]');
        this.AlertMsg_DocumentType = page.locator('//p[text()="Select document type"]');

        //Tour Details
        this.viewIcon = page.locator('(//button[@aria-label="View"])[1]');
        this.externalVehicleText = page.locator('//span[text()="External Vehicles"]');
        this.tourDetails = page.locator('[class="MuiDataGrid-main css-opb0c2"]');

        //Rows per page
        this.rowsperPage = page.locator('//div[@aria-haspopup="listbox"]');
        this.select20 = page.locator("//li[text()='20']");
        this.select30 = page.locator("//li[text()='30']");

        //Download
        this.downloadButton = page.locator('//button[text()="download"]');
        this.pdfDownload = page.locator('//ul[@id="split-button-menu"]/li[1]');
        this.excelDownload = page.locator('//ul[@id="split-button-menu"]/li[2]');
        this.toasterForPDF = page.locator('//div[text()="PDF Downloaded successfully"]');
        this.toasterForExcel = page.locator('//div[text()="Excel Downloaded successfully"]');

        //Alert Message
        this.clearReportsType = page.locator('(//button[@aria-label="Clear"])[1]');
        this.alertMsgReportType = page.locator('//p[text()="Select report type"]');
        this.last7Days = page.locator('//div[@class="MuiListItemText-root list-text css-1tsvksn"]/span[text()="Last 7 days"]');
        this.startDateAlert = page.locator('//p[text()="Start Date is required"]');
        this.endDateAlert = page.locator('//p[text()="End Date is required"]');
        this.startDateCalendarIcon = page.locator('(//button[@type="button"])[4]');
        this.endDateCalendarIcon = page.locator('(//button[@type="button"])[5]');
   };

    async navigateReportsScreen(){
        await this.reportsIcon.click();
        await this.page.waitForTimeout(3000);
    };

    async getExternalReport(value){
        await this.selectReportType.fill('External');
        await this.selectReportType.press('ArrowDown');
        await this.selectReportType.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.startDate.click();
        await this.monthYear.click();
        await this.selectYear.click();
        await this.previousMonth.click();
        await this.page.waitForTimeout(1000);
        await this.selectDate.click();
        await this.selectTime.click({force : true });
        await this.page.waitForTimeout(3000);
        await this.selectMinutes.click({force : true });
        await this.page.waitForTimeout(1000);
        await this.endDate.click();
        await this.monthYear.click();
        await this.selectEndYear.click();
        await this.nextMonth.click();
        await this.page.waitForTimeout(1000);
        await this.selectDate.click();
        await this.selectTime.click({force : true });
        await this.page.waitForTimeout(1000);
        await this.selectMinutes.click({force : true });
        await this.getReportButton.click();
        await this.page.waitForTimeout(2000);
        const successfulToasterMsg = await this.reportToasterMSG.textContent();
        expect(successfulToasterMsg).toBe(value);
        console.log(successfulToasterMsg);
    }

    async sendEMail_PDFDocument(){
        await this.emailButton.click();
        await this.emailField.click();
        await this.emailField.clear();
        await this.page.waitForTimeout(1000);
        await this.emailField.fill('rajalakshmi.r@datayaan.com');
        await this.page.waitForTimeout(1000);
        await this.documentType.fill('PDF');
        await this.documentType.press('ArrowDown');
        await this.page.waitForTimeout(1000);
        await this.documentType.press('Enter');
        await this.sendMailButton.click();
        await this.page.waitForTimeout(2000);
        const PDF_Toaster = await this.sendPDFToaster.innerText();
        console.log(PDF_Toaster);
    }

    async sendEMail_ExcelDocument(){
        await this.emailButton.click();
        await this.emailField.click();
        await this.emailField.clear();
        await this.page.waitForTimeout(1000);
        await this.emailField.fill('rajalakshmi.r@datayaan.com');
        await this.page.waitForTimeout(1000);
        await this.documentType.fill('Excel');
        await this.documentType.press('ArrowDown');
        await this.page.waitForTimeout(1000);
        await this.documentType.press('Enter');
        await this.sendMailButton.click();
        await this.page.waitForTimeout(2000);
        const PDF_Toaster = await this.sendPDFToaster.innerText();
        console.log(PDF_Toaster);
        await this.page.waitForTimeout(1000);
    }

    async InvalidDataforEMailField(){
        await this.emailButton.click();
        await this.emailField.click();
        await this.emailField.clear();
        await this.page.waitForTimeout(1000);
        await this.emailField.fill('123@#jhgjh');
        await this.page.waitForTimeout(1000);
        await this.documentType.fill('Excel');
        await this.documentType.press('ArrowDown');
        await this.page.waitForTimeout(1000);
        await this.documentType.press('Enter');
        await this.sendMailButton.click();
        const emailAlertMessage = await this.mailAlertMsg.innerText();
        console.log(emailAlertMessage);
        await this.cancelButton.click();
        await this.page.waitForTimeout(1000);
    }

    async withoutMailandDocumentType(){
        await this.emailButton.click();
        await this.emailField.click();
        await this.emailField.clear();
        await this.page.waitForTimeout(1000);
        await this.sendMailButton.click();
        const Email_AlertMessage = await this.AlertMsg_Email.innerText();
        const DocumentType_AlertMessage = await this.AlertMsg_DocumentType.innerText();
        console.log(Email_AlertMessage);
        console.log(DocumentType_AlertMessage);
        await this.page.waitForTimeout(1000);
        await this.cancelButton.click();
        await this.page.waitForTimeout(1000);

    }

    async viewTourDetails(){
        await this.viewIcon.click();
        await this.page.waitForTimeout(3000);
        const printTourDetails = await this.tourDetails.innerText();
        console.log(printTourDetails);
        await this.page.locator(1000);
        await this.externalVehicleText.click();
        await this.page.waitForTimeout(1000);
    }

    async rowsPerPage(){
        await this.page.waitForTimeout(2000);
        await this.rowsperPage.scrollIntoViewIfNeeded();
        await this.rowsperPage.click();
        await this.select20.click();
        await this.page.waitForTimeout(2000);
        await this.rowsperPage.click();
        await this.page.waitForTimeout(1000);
        await this.select30.click();
        await this.page.waitForTimeout(2000);        
    }

    async checkDownload(){
        await this.selectReportType.clear();
        await this.getReportButton.click();
        await this.selectReportType.fill('External');
        await this.selectReportType.press('ArrowDown');
        await this.selectReportType.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.startDateCalendarIcon.click();
        await this.page.waitForTimeout(2000);
        await this.last7Days.click({force : true});
        await this.page.waitForTimeout(1000);
        await this.getReportButton.click();
        await this.page.waitForTimeout(2000);
        await this.downloadButton.click();
        await this.page.waitForTimeout(1000);
        await this.pdfDownload.click();
        await this.page.waitForTimeout(1000);
        const PDF_ToasterMsg = await this.toasterForPDF.innerText();
        console.log(PDF_ToasterMsg);
        await this.page.waitForTimeout(1000);
        await this.downloadButton.click();
        await this.page.waitForTimeout(1000);
        await this.excelDownload.click();
        await this.page.waitForTimeout(1000);
        const Excel_ToasterMsg = await this.toasterForExcel.innerText();
        console.log(Excel_ToasterMsg);     
        await this.page.waitForTimeout(1000);
    }

    async checkAlertMsg(){
        await this.selectReportType.clear();
        await this.page.waitForTimeout(1000);
        await this.getReportButton.click();
        await this.page.waitForTimeout(1000);
        const reportTypeAlert = await this.alertMsgReportType.innerText();
        console.log(reportTypeAlert);
        await this.page.waitForTimeout(1000);
        const alertForStartDate = await this.startDateAlert.innerText();
        console.log(alertForStartDate);
        await this.page.waitForTimeout(1000);
        const alertForEndDate = await this.endDateAlert.innerText();
        console.log(alertForEndDate);
        await this.page.waitForTimeout(1000);
    }


};

module.exports = {ReportsPage};