import {test,expect} from '@playwright/test'

test('Drag and Drop', async ({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await expect(page.getByText('Drag me to my target')).toBeVisible()
        await page.getByText('Drag me to my target').dragTo(page.getByText('Drop here'))
        await expect(page.getByText('Dropped!')).toBeVisible()
    })