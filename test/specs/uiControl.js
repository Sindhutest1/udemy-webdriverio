const expectchai = require('chai').expect

describe('Ecommerce application', () => 
{
    xit('UI Controls', async () =>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
        $("input[name='username']").setValue('rahulshettyacademy');
        const password = $("//input[@type='password']");
        await password.setValue("learning");

        // Show pop up on clicking the radiobutton. Cancel the action
        const radioButtons = $$(".customradio");
        userdropdown = radioButtons[1];
        await userdropdown.$(".radiotextsty").click();
        const modal = $(".modal-body");
        modal.waitForDisplayed();
        $("#cancelBtn").click();

        // Show pop up on clicking the radiobutton. Confirm the action
        console.log(await userdropdown.$(".radiotextsty").isSelected());
        await userdropdown.$(".radiotextsty").click();
        $(".modal-body").waitForDisplayed();
        $("#okayBtn").click();

        // Restrict the pop as previous action was confirmed
        await radioButtons[0].$(".radiotextsty").click();
        await expect(modal).not.toBeDisplayed();

        const dropdown = $('select.form-control');
        await dropdown.selectByAttribute('value', 'teach');
        browser.pause(3000);
        await dropdown.selectByVisibleText('Consultant');
        browser.pause(3000);
        await dropdown.selectByIndex(0);
        browser.pause(3000);
        await dropdown.getValue();
        expectchai(await dropdown.getValue()).to.equal("stud")

    })
    it('Dynamic dropdowns', async () =>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $("#autocomplete").setValue("ind");
        await browser.pause(3000);
        let items = await $$("[class='ui-menu-item'] div");
        // for(i=0;i<items.length;i++)
        // {
        //     console.log(await items[i].getText());
        // }

        const desiredvalue = items.filter(async item=> (await item.getText() === "India"));
        await desiredvalue[1].click();
        await browser.pause(3000);
    
        })
})
