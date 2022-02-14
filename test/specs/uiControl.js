describe('Ecommerce application', () => 
{
    it('UI Controls', async () =>
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
    })
})