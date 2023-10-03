const {test,expect}=require('@playwright/test')
test('Scenario1',async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/")
await page.click("//a[text()='Drag & Drop Sliders']")
const input=await page.locator("//input[@value='15']")
await input.hover()
//const output =await page.locator("//output[text()='95']")
//await output.click()
//await input.dragTo(output)

const outp=await page.locator("//output[text()='95']")
const range_max=95

await input.click()
if (range_max){

}

    await input.press('ArrowRight')

await page.waitForTimeout(5000)

})