const { test } = require ('@playwright/test');
const { LoginPage } = require ('../../SuperAdminPages/LoginPage');
const { ReportsPage } = require ('../../SuperAdminPages/ReportsPage');

let page;
let context;

test.describe('TS03', async()=>{

    test.beforeAll('Reports Module', async({browser})=>{
        context = await browser.newContext({
            viewport: { width: 1200, height: 600 },
            geolocation: {latitude: 12.939965304673995, longitude: 80.11990807936198},
            permissions: ['geolocation'],
    });
        page = await context.newPage();
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoperator@123');
    });
    

    test('TC001 - Navigate to the Reports module', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.navigateReportsScreen();
    });

    test('TC002 - Get the External report', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.getExternalReport('External Vehicle Report generated successfully');
    });

    test('TC_003 - Send the PDF document via email.', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.sendEMail_PDFDocument();
    })

    test('TC004 - Send the Excel document via email.', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.sendEMail_ExcelDocument();
    })

    test('TC005 - verify that the alert message display when the user enters invalid email.', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.InvalidDataforEMailField();
    })

    test('TC006 - Verify that the send mail screen displays the alert message when the user without select the email and document type.', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.withoutMailandDocumentType();
    })

    test('TC007 - Verify the tour details in Report screen.', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.viewTourDetails();
    })
        
    test('TC008 - Verify the Rows Per Page field works correctly.', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.rowsPerPage();
    })

    test('TC009 - Check the report details download successfully.', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.checkDownload();
    })

    test('TC010 - Verify that an alert message is shown when the user does not select the mandatory fields.', async()=>{
        const reportsModule = new ReportsPage(page);
        await reportsModule.checkAlertMsg();
    })

})