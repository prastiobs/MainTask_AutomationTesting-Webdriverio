const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const loginPage = require('../pageobjects/login.page');
const urlPage = require('../pageobjects/url.page');

Given(/^I am on the login page$/, function(){
    urlPage.openBrowser();
});

When(/^I login with default user$/, function(){
    loginPage.login();
});

Then(/^I should see a dashboard page$/, function(){
    var strUrl = browser.getUrl();
    console.log("URL is : "+strUrl);
});
