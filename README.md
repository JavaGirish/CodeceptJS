<b> #CodeceptJS </b>

Basic CodeceptJS project built using CodeceptJS + WebDriver Helper

* After cloning the project, open the code in Visual Studio
* 3 test files are located in Tests folder
* To run the tests, go to Terminal and execute the command: "npx codeceptjs run --steps"
* After tests run is completed, run reports (Allure Reports) will be generated in output folder
* To generate Allure Reports, run command "allure serve output" in the terminal which will open allure test run reports in your browser


Test Cases:
* TC1-AddCustomer: Login to admin demo nopcommerce website, navigate to Customers Section and add a new Customer record 
* TC2-EditCustomer: Login to admin demo nopcommerce website, navigate to Customers Section, select the customer record added and edit some field values for the record
* TC3-DeleteCustomer: Login to admin demo nopcommerce website, navigate to Customers Section, and delete the customer record added
