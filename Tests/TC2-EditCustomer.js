Feature('NOP Commerce Website E2E Tests: Edit an existing Customer');

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


Scenario('Edit a new customer', (I) => {
    I.click('li.treeview:nth-child(4)')
    I.click('.menu-open li:nth-child(1) span')

    //Validate if Homer Simpson is added already and record is available
    I.see('Homer Simpson', '.dataTables_scrollBody tbody tr:nth-child(1) td:nth-child(3)')

    //Validate Company Name
    I.see('Springfield Nuclear Power Plant', '.dataTables_scrollBody tbody tr:nth-child(1) td:nth-child(5)')

    I.click('.dataTables_scrollBody tbody tr:nth-child(1) input')
    I.click('.dataTables_scrollBody tbody tr:nth-child(1) a')
    I.waitForElement('.content-header',10)
    I.see('Edit customer details - Simpson Homer')

    I.clearField('First name') //clear first name
    I.fillField('First name', 'Ned') //update first name 
    I.clearField('Last name') //clear last name
    I.fillField('Last name', 'Flanders') // update last name
    I.clearField('Company name')  
    I.click('Save') //Save record
    //Validate success alert
    I.see('The customer has been updated successfully.','.alert-success')

})