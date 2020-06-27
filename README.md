#CodeceptJS

Basic CodeceptJS project built using CodeceptJS + WebDriver Helper

* After cloning the project, open the code in Visual Studio
* 3 test files are located in Tests folder
* To run the tests, goto Terminal and type "npx codeceptjs run --steps"
* After tests run, test run reports (Allure Reports) will be generated in output folder
* To generate Allure Reports generated, run the command "allure serve output" which will open the allure reports in your browser


Test Cases:
* TC1-AddCustomer: Login to admin demo nopcommerce website, navigate to Customers Section and add a new Customer record 
* TC2-EditCustomer: Login to admin demo nopcommerce website, navigate to Customers Section, select the customer record added and edit some field values for the record
* TC3-DeleteCustomer: Login to admin demo nopcommerce website, navigate to Customers Section, and delete the customer record added
