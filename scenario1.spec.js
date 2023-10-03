const {test,expect}=require('@playwright/test')
test('Scenario1',async({page})=>{
await page.goto('https://www.lambdatest.com/selenium-playground')
await page.click("//a[text()='Simple Form Demo']")
const url = await expect(page).toHaveURL('https://www.lambdatest.com/selenium-playground/simple-form-demo');
console.log(url)
//await expect(page).toHaveTitle('Simple Form Demo')
const b=await page.locator("//input[@id='user-message']").fill("Shashankreddy")
await page.click("//button[text()='Get Checked Value']")

await expect(await page.locator("//p[@id='message']")).toHaveText('Shashankreddy')

//console.log(b)
await page.waitForTimeout(5000)
})
