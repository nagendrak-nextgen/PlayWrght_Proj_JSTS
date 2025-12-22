import {test,expect} from '@playwright/test'

test('Mouse Hover', async ({page}) =>
{
    await page.goto('https://www.spicejet.com/')
    // await page.pause()
    await expect(page.getByText('search flight')).toBeVisible()
    await page.getByText('travel policies', {exact:true}).hover()
    await page.getByText('Passenger Support').click()
    const newpage1 = page.waitForEvent('popup')
    //const pagehedding = (await newpage).locator('div.traveller-details-heading.about-heading-title').textContent()
    //console.log(pagehedding)
    ;(await newpage1).getByText('click here').highlight
    ;(await newpage1).getByText('click here').click
    const newpage2 = page.waitForEvent('popup')
    await page.pause()
    //await expect(newpage2).getByText('Submit').toBeVisible()
    //expect('Passenger Support').toContain(pagehedding)

})