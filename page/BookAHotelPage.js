const {test, expect} = require("@playwright/test");

class BookAHotelPage{
    async SelectHotel(){
            await global.page.locator('//input[@id="radiobutton_0"]').check();
    }

    async Continue(){
        await global.page.locator('//input[@id="continue"]').click();
    }

      async FirstName(){
        await global.page.locator('//input[@id="first_name"]').fill('Anand');
    }

    async LastName(){
        await global.page.locator('//input[@id="last_name"]').fill('kumar');
    }
    async BillingAddress(){
        await global.page.locator('//textarea[@id="address"]').fill('Chennai');
    }

    async CreditCardNo(){
        await global.page.locator('//input[@id="cc_num"]').fill('1234567891234567');
    }

    async CreditCardType(){
        await global.page.locator('//select[@id="cc_type"]').selectOption({index:1});
    }

    async ExpiryDate(){
        await global.page.locator('//select[@id="cc_exp_month"]').selectOption({index:1});;
        await global.page.locator('//select[@id="cc_exp_year"]').selectOption({index:1});;
    }

    async Cvv(){
        await global.page.locator('//input[@id="cc_cvv"]').fill('231');
    }

    async BookNow(){
        await global.page.locator('//input[@id="book_now"]').click;
    }
    async verifyTitle(){
        await expect (global.page).toHaveTitle('Adactin.com - Book A Hotel');
    }

}

module.exports={BookAHotelPage}