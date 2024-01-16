const {test, expect} = require("@playwright/test");

class SearchHotelPage{
      async Location(){
        await global.page.locator('//select[@id="location"]').selectOption('Sydney');
    }

    async Hotels(){
        await global.page.locator('//select[@id="hotels"]').selectOption({index:1});
    }
    async RoomType(){
        await global.page.locator('//select[@id="room_nos"]').selectOption('2');
    }

    async clickOnSubmit(){
        await global.page.locator('//input[@name="Submit"]').click();
    }

    async verifyTitle(){
        await expect (global.page).toHaveTitle('Adactin.com - Select Hotel');
    }

}

module.exports={SearchHotelPage}