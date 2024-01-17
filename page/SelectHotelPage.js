const {test, expect} = require("@playwright/test");

class SelectHotelPage{
    async SelectHotel(){
        //await global.page.waitForTimeout(6000);      
        await global.page.locator("(//input[@id='radiobutton_1'])[1]").check();
        //await global.page.getByRole("(//input[@id='radiobutton_0'])[1]").setChecked(true);

    }
    async Continue(){
        await global.page.locator('//input[@id="continue"]').click();
        await global.page.waitForTimeout(3000);
    }
}

module.exports={SelectHotelPage}