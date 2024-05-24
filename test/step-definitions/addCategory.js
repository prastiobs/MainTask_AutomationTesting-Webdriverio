const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const urlPage = require('../pageobjects/url.page');
const loginPage = require('../pageobjects/login.page');
const addCategory = require('../pageobjects/addCategory.page');

Given(/^I am on the dashboard page$/, function(){
    urlPage.openBrowser();
    loginPage.login();
});

When(/^I click on category button, click on tambah, fill form input, and click simpan button$/, function(){
    addCategory.category();
});

Then(/^I should see a success notify$/, function(){
    var strUrl = browser.getUrl();
    console.log("URL is : "+strUrl);
});
