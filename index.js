const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const {By, until} = webdriver;

var options = new chrome.Options();
options.addArguments('--user-data-dir=/home/SERILOCAL/p.oshaughnes/.config/google-chrome/Default');

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();
    
//driver.manage().timeouts().setScriptTimeout(10000);

driver.get('https://medium.com/samsung-internet-dev/stats/overview')
    //.then(() => {
	//return driver.wait(until.titleIs('Medium'), 2000);
    //})
    .then(() => {
	return driver.getTitle();
    })
    .then(title => {
	console.log('Page title is', title);
	return driver.findElement(By.id('container'));
    })
    .then(element => {
	console.log('Element found is', element);
	console.log('Time to quit');
	//driver.quit();
    })
    .catch(err => {
	console.log('Error', err);
    });

