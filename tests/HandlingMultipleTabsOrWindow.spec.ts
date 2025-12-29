import{test,expect} from '@playwright/test'

test('Handling Multiple tabs', async ({page})=>
{
    await page.goto('https://demo.automationtesting.in/Windows.html')
    await page.locator('#Tabbed button').click()
    const newpage = await page.waitForEvent('popup')
    await newpage.getByText("Downloads").click()
    await expect(newpage).toHaveURL("https://www.selenium.dev/downloads/")
    const textvalue = newpage.locator('h1.d-1').textContent()
    expect(textvalue,'Downloads')
    await expect(newpage.locator('#bindings')).toContainText("WebDriver Language Bindings")

    //Selecting/Highlighting main page
    await page.bringToFront()
    await page.getByText('Home').first().click()
    await expect(page.locator('#email')).toBeVisible()
    await page.getByPlaceholder('Email id for Sign Up').highlight()


})