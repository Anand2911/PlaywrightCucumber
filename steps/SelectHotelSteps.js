const {When, Then} = require('@cucumber/cucumber');
const {LoginPage} = require('../page/LoginPage');
const { SearchHotelPage } = require('../page/SearchHotelPage');
const { SelectHotelPage } = require('../page/SelectHotelPage');

let sh = new SelectHotelPage();

When('User check Hotel name', {timeout: 60 * 1000}, async()=>{
    await sh.SelectHotel();    
})

When('User continue with hotel', async()=>{
    await sh.Continue();
})