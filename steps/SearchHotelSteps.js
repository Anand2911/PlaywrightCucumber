const {When, Then} = require('@cucumber/cucumber');
const {LoginPage} = require('../page/LoginPage');
const { SearchHotelPage } = require('../page/SearchHotelPage');

let sp = new SearchHotelPage();

When('User select Location', async()=>{
    await sp.Location();
})

When('User select Hotels', async()=>{
    await sp.Hotels();
})
When('User select RoomType', async()=>{
    await sp.RoomType();
})

When('User click On Submit button', async()=>{
    await sp.clickOnSubmit();
})

When('User verify title one', async()=>{
   await sp.verifyTitle();
})