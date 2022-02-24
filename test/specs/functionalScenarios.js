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
    await browser.pause(3000);

    })
})