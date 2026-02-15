import{test,expect} from '@playwright/test'

test('working with file download', async ({page})=>
{
    await page.goto("https://commitquality.com/practice-file-download")
    const waitfordownloadevent = page.waitForEvent("download")
    await page.getByRole('button',{name:'Download File'}).click()
    const dwnld = await waitfordownloadevent
    //await dwnld.saveAs("C:\\Family\\Nagendra\\Courses\\PlayWright\\Videos\\PlayWright" + dwnld.suggestedFilename())
    await dwnld.saveAs("./" + dwnld.suggestedFilename())
})
