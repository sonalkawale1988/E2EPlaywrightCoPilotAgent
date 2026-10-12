const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test - Basic', async ({browser}) =>
{
    // Initializing page   
    const context = await browser.newContext();
    const page = await context.newPage();

     await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});
