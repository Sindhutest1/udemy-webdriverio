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
- Chai assertion library - https://www.chaijs.com/api/bdd/#method_true

Handle Dynamic Dropdowns:
- Xpath - Provide "/" B/W the parent to child element
- CSS - provide space b/w the parent to child element
- Use filter array to compare the string in the dropdown
- Variable.filter(item=> item.gettext() === "stringvalue")

Handle Checkbox and screenshots:
- To check checkbox selected - isSelected()
- To take screenshot of each line - browser.savescreenshot("screenshot.png")

Understand Mouse Hover and scrolling to invisble object:
- Scrollintoview()- use to scroll for object display.
- Moveto() - Hoverover
- $('=') - linktext
- Add Relative path of each file in conf.js file to execute only 1 file

Handle Javascript Related Alerts:
- isAlertOpen() - Alert is opened in the window
- getAlertText() - Grab text in the Alert
- acceptAlert() - To click Ok button in the alert

Apply Sort in Web tables:
- xpath parent to child - //tr/th[1] - 1st header
- Css - tr th:nth-child(1)
- Map - To retrive new result from existing result

Debugging WDIO With VS Code
- Official Website - https://webdriver.io/docs/debugging/
- Windows/linux - Install https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly
- Add piece of code - Create folder => .vscode => launch.json =>Add configuration button
- The slice() method returns selected elements in an array, as a new array.
- The slice() method selects from a given start, up to a (not inclusive) given end.
- The slice() method does not change the original array.


 








  
