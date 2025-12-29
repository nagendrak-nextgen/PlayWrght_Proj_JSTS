import{test,expect} from '@playwright/test'

test('working with dropdown with Select tag',async({page})=>
{
    await page.goto('https://www.spicejet.com/')
    await page.getByTestId('home-page-travellers').click()
    await page.waitForTimeout(20000)
})