const expectchai = require('chai').expect

describe('Functional testing of application', () => 
{
    xit('scrolling and MouseHover ', async () =>
    { 
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    $('#mousehover').scrollIntoView();
    await browser.pause(3000);
    $('#mousehover').moveTo();
    await browser.pause(3000);
    $('=Top').click();
   
    await browser.url('https://only-testing-blog.blogspot.com/');
    await $("button").scrollIntoView();
    const myButton = $("button");
    await myButton.doubleClick() //Double Click on Double Click Here Button 
    await browser.pause(3000);
    console.log(await browser.isAlertOpen());
    expectchai(await browser.isAlertOpen()).to.be.true;
    console.log(await browser.getAlertText());
    expectchai(await browser.getAlertText()).to.equal("Press 'OK' or 'Cancel' button!")
    await browser.acceptAlert(); // Accept alert ok button
    await browser.pause(3000);
    })

    it('Web table sorting', async () =>
    { 
     await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
     await $("tr th:nth-child(1)").click();
     await browser.pause(3000);
     //retrive list of veggiee names into Array A
     //Sort the Array A => Array B
     //Compare Array A with Array B
     const veggieeLocators = await $$("tr td:nth-child(1)");
     const veggieeNames = veggieeLocators.map(async veggiee=> await veggiee.getText());
     const Arrayvegiee = await Promise.all(veggieeNames);
     console.log(Arrayvegiee);
     sortVeggiees = Arrayvegiee.sort();
     console.log(sortVeggiees);
     expectchai(Arrayvegiee).to.equal(sortVeggiees);
     

    })
})