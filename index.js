const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

var options = new chrome.Options();
options.addArguments('--user-data-dir=/home/SERILOCAL/p.oshaughnes/.config/google-chrome/Default');

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();
    
//driver.manage().timeouts().setScriptTimeout(10000);

driver.get("http://www.google.com");
 
driver.getTitle().then(function(title) {
    console.log(title);
});
 
//driver.quit();
