var faker = require('faker');

let randomEmail = faker.internet.email();

Feature('NOP Commerce Website E2E Tests: Adding a new Customer');



Before((I) => { // or Background
I.amOnPage('/');
I.clearField('Email:')
I.fillField('#Email', 'admin@yourstore.com') //enter email
I.clearField('Password:')
I.fillField('#Password', 'admin') //enter password
I.click('Log in') //click on login button

I.seeInTitle('Dashboard / nopCommerce administration')
I.seeElement('.content-header')

  });


Scenario('Create a new customer', (I) => {

I.click('li.treeview:nth-child(4)')
I.click('.menu-open li:nth-child(1) span')
I.waitForElement('.content-header',10)
I.click('Add new')
I.waitForElement('.content-header')
//I.fillField('Email','simpson.ah@nopcommerce.com');
I.fillField('Email', randomEmail);
I.fillField('Password','Password')
I.fillField('First name', 'Homer')  
I.fillField('Last name', 'Simpson')  
I.checkOption('#Gender_Male')  
I.fillField('Date of birth', '5/2/1980')  
I.fillField('Company','Springfield Nuclear Power Plant')
I.click('Save')

I.see('The new customer has been added successfully.','.alert-success')


})
