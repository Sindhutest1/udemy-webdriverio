describe('Ecommerce application', () => {
     
    // it - Define test cases 
    // xit - To skip the execution of Test case
    xit('Login Failed Flow', async () =>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
        const title = await browser.getTitle();
        console.log(title);
        await browser.pause(3000);
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
        
        $("input[name='username']").setValue('rahulshettyacademy');
        const password = $("//input[@type='password']");
        await password.setValue("learning123");
        await browser.pause(3000);
        $("#signInBtn").click();
        await browser.pause(3000);
        console.log($(".alert-danger").getText() + "is the text displaying on the screen");

        await browser.waitUntil(async() => await $("#signInBtn").getAttribute('value') === 'Sign In',
        { timeout: 4000 , timeoutMsg : 'error message did not appear'});
        console.log(await $(".alert-danger").getText() + "is the text displaying on the screen");
        $("p").getText();
        expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)");  
    })

    xit('Login Success Flow', async () =>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
        $("input[name='username']").setValue('rahulshettyacademy');
        const password = $("//input[@type='password']");
        await password.setValue("learning");
        await browser.pause(3000);
        $("#signInBtn").click();
        const Link = $("*=Checkout");
        await Link.waitForExist();
        await expect(browser).toHaveTitle("ProtoCommerce");
        await expect(browser).toHaveUrlContaining("shop");
    })
});