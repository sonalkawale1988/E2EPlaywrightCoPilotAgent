/* Initializing page, storing selector in variable, Capturing and Asserting the error message, 
how to find first,last and nth entry from the list*/


const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test - Basic', async ({browser}) =>
{
    // Initializing page   
    const context = await browser.newContext();
    const page = await context.newPage();

    //storing selector in variable
    const userName = page.locator('#username');
    const pwd = page.locator("[type='password']");
    const signBtn = page.locator('#signInBtn');
    const allText = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   
    //TC1 - Validating login journey - Entering valid details to go to next page
    await userName.fill("rahulshettyacademy"); //correct username and use of fill to clear previous value in text field
    await pwd.fill("Learning@830$3mK2");
    await signBtn.click();

    //TC2 - displaying all titles
    const allTitles = await allText.allTextContents();
    console.log(allTitles);

});

test('Validating page title', async ({page}) =>
{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});