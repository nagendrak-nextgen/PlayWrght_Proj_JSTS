import{test, expect} from '@playwright/test'

test('handeling Alert', async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(20000)

    page.on('dialog',(dlg)=>
    {
        //await page.waitForTimeout(20000)
        console.log(dlg.message())
        console.log('Popup is handled by me')
        //dlg.accept()

    })

    //await page.locator('button#alertBtn').highlight()
    //await page.getByText('Simple Alert').first().highlight()
   
    await page.locator('button#alertBtn').click
    //page.pause()
    console.log('Alert is handeled')

})