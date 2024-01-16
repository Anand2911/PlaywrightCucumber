const {When, Then} = require('@cucumber/cucumber');
const {LoginPage} = require('../page/LoginPage');
const { SearchHotelPage } = require('../page/SearchHotelPage');
const { BookAHotelPage } = require('../page/BookAHotelPage');

let bp = new BookAHotelPage();

When('User check Hotel name', async()=>{
    let ap = await bp.SelectHotel();
    console.log(ap);
})

When('User continue with hotel', async()=>{
    await bp.Continue();
})
When('User enter first name', async()=>{
    await bp.FirstName();
})

When('User enter last name', async()=>{
    await bp.LastName();
})

When('User enter Billing Address', async()=>{
    await bp.BillingAddress();
})

When('User enter Credit Card No', async()=>{
    await bp.CreditCardNo();
})

When('User Credit Card Type', async()=>{
    await sp.CreditCardType();
})

When('User select Expiry Date', async()=>{
    await bp.ExpiryDate();
})

When('User select Cvv', async()=>{
    await bp.Cvv();
})

When('User Click on Book Now', async()=>{
    await bp.BookNow();
})

When('User verify title two', async()=>{
   await bp.verifyTitle();
})