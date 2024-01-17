const {When, Then} = require('@cucumber/cucumber');
const {LoginPage} = require('../page/LoginPage');
const { SearchHotelPage } = require('../page/SearchHotelPage');
const { SelectHotelPage } = require('../page/SelectHotelPage');
const { BookAHotelPage } = require('../page/BookAHotelPage');
const { BookedItineraryPage } = require('../page/BookedItineraryPage');

let bi = new BookedItineraryPage();

When('User click on Booked Itinerary', async()=>{
    await bi.BookedItinerary();
})


When('User click on Order Id', async()=>{
    await bi.OrderId();
})

When('User want to Cancel Selected', async()=>{
    await bi.CancelSelected();
})

When('User click on logout', async()=>{
    await bi.Logout();
})