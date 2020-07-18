Feature('Login and Search Product');

 Before((I) => {

     I.amOnPage('https://demo.nopcommerce.com/');
     I.seeInTitle('nopCommerce demo store');

//     I.click('Log in');
//     I.fillField('Email:', 'max.payne@testmail.com');
//     I.fillField('Password:','Test@123');
//     I.click('.login-button');
//     I.waitForElement('.ico-account', 10);
//     I.see('Log out') //verify logout button is seen 

 })


Scenario('Search an Product', (I) => {

   I.fillField('Search store', "Apple Macbook")
   I.click('.ui-menu-item-wrapper span')
   I.see('Apple MacBook Pro 13-inch');
   I.clearField('#product_enteredQuantity_4')
   I.fillField('#product_enteredQuantity_4','3');
   I.click('Add to cart');
   I.seeElement('.bar-notification.success', 'The product has been added to your shopping cart')
   I.click('shopping cart')
   I.wait(3);
   I.selectOption('#checkout_attribute_1', 'Yes [+$10.00]');
   
   I.click('#open-estimate-shipping-popup')
   
   I.selectOption('#CountryId','1')
   I.selectOption('#StateProvinceId','52')
   I.fillField('#ZipPostalCode','34356')
   I.checkOption("//div[text()='Next Day Air']");
   I.click('Apply')
   I.seeElement('.value-summary strong','$5,400.00');
   I.saveScreenshot('order1.png');
   I.click({name: 'removefromcart'})
   I.click('Update shopping cart')
   I.waitForElement('.order-summary-content',10)
   I.saveScreenshot('order2.png')
  
   



});


