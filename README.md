# udemy-webdriverio

Udemy Course link - https://www.udemy.com/course/webdriverio-tutorial-nodejs-javascript/

Introduction: 
- Webdriverio is builded with Node JS Engine.
- Trends - https://www.npmtrends.com/webdriverio-vs-cypress (2nd mostly used javascript based framework for QA Automation)

Getting start with node installation:
- Install Node JS verify below commands to find it is alreday exists
- node -v and npm -v
- Clone repository to the local git clone <SSH_URL>
- To list remote repositories git remote -v
- Get latest code from the origin - git pull origin main
- push local changes/modifications to the origin - git push origin main

Getting started with webdriver installation:
- npm init wdio .
- Run Command - npx wdio run wdio.conf.js

Configuration customization:
- logLevel = "silent" To display only application logs.

Convert HTML to CSS Locator:
- WDIO supports XPATH/CSS/LINKTEXT

Sample HTML Snippet:
```
<input type="text" name="username" id="user-name" class="form-control">
<a src="https://google/com">Google</a>
<a src="https://youtube/com">Youtube</a>
```


Different Locators for the Sample Tag:
- Locator by attribute = $("input[name='username']") 
- Locator by ID = $("#user-name")
- Locator by Class name = $(".form-control")
- Locator by tagname = tagname = $("input")
- Locator by Link text = $("=<Google>")
- Locator by Partial link text = $("*=<You>")

Understand XPath,CSS and identify Elements in WDIO
- "#id" -> CSS , ".classname" -> CSS
- To find Xpath = //tagname[@attribute='value'] OR //*[@attribute='value']

Wait for changing operation = https://webdriver.io/docs/api/browser/waitUntil/ 
 
Handle elements selection
- Single $ - will handle 1 element in the page
- Double $$ - will handle all elements which matches

Handle static dropdowns
- The options are already present in dropdown - static dropdown
- The options display as per user input - dynamic dropdowns
- selectByAttribute('value', 'teach')
- selectByVisibleText('text')
- selectByIndex(0)
- Chai is one library which supports assertions
- Chai official website - https://www.npmjs.com/package/chai
- Install - npm install --save-dev chai - helps to save in package.json dependencies.

Handle Dynamic Dropdowns:
- Xpath - Provide "/" B/W the parent to child element
- CSS - provide space b/w the parent to child element
- Use filter array to compare the string in the dropdown
- Variable.filter(item=> item.gettext() === "stringvalue")


 








  
