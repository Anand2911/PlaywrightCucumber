const {When, Then} = require('@cucumber/cucumber');
const {LoginPage} = require('../page/LoginPage')

let lp = new LoginPage();

When('User is on login page', async()=>{
    await lp.navigate();
})

When('User enter username', async()=>{
    await lp.enterUserName();
})

When('User enter password', async()=>{
    await lp.enterPassword();
})

When('User clicks on login button', async()=>{
    await lp.clickOnLoginButton();
})

When('User verify title', async()=>{
    await lp.verifyTitle();
})