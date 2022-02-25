const expectchai = require('chai').expect

describe('Functional testing of application', () => 
{
    it('scrolling and MouseHover ', async () =>
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
})