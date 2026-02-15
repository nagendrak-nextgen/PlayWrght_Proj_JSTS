import {test, expect} from '@playwright/test'

test('Automate WhatsApp', async ({page}) =>
{
    await page.goto("https://web.whatsapp.com/")
    await page.waitForTimeout(20000)
    await page.locator('._aupe.copyable-text.x15bjb6t.x1n2onr6').fill('Playwright JS TS 9th Oct Paid')
    //await page.getByTitle('Playwright JS TS 9th Oct Paid').first().click()
    await page.getByTitle('Playwright JS TS 9th Oct Paid').first().click()
    await page.locator('._aupe.copyable-text.x15bjb6t.x1n2onr6').last().fill('Happy New Year')
    await page.pause()
})