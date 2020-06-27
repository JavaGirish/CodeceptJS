Feature('NOP Commerce Website E2E Tests: Delete an Customer record');

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


Scenario('Delete a new customer', (I) => {
    I.click('li.treeview:nth-child(4)')
    I.click('.menu-open li:nth-child(1) span')

    //Validate if Homer Simpson is updated to Ned Flanders and is available
    I.see('Ned Flanders', "//td[contains(text(),'Ned')]")

    I.click("//td[contains(text(),'Ned')]/preceding-sibling::td[2]/input") 
    I.click("//td[contains(text(),'Ned')]/following-sibling::td[6]/a")
    I.waitForElement('.content-header',10)
    I.see('Edit customer details - Flanders Ned')
    I.click('#customer-delete ')
    I.waitForElement('.bg-red.pull-right',10)
    I.click('.bg-red.pull-right')

    I.see('The customer has been deleted successfully.','.alert-success')

})