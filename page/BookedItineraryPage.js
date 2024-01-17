const {test, expect} = require("@playwright/test");

class BookedItineraryPage {
    async BookedItinerary() {
        await page.waitForTimeout(3000);
        await global.page.locator('//a[text()="Booked Itinerary"]').click();
               
    }
    async OrderId() {
        await global.page.locator('(//input[@type="checkbox"])[2]').check();
        //await global.page.locator('(//input[@type="checkbox"])[3]').check();
    }

    async CancelSelected() {
        await global.page.getByRole('button', {name: 'Cancel Selected'}).click();
        //dialogbox
        await page.on('Alert',async dialog => {
            expect (dialog.type()).toContain('Cancel');
            expect (dialog.message()).toContain('Are you sure want to Cancel Selected?.');
            await dialog.accept();
         });

    }
    async Logout() {
        await global.page.locator('//input[@id="logout"]').click();
        
    }
}
module.exports = {BookedItineraryPage}