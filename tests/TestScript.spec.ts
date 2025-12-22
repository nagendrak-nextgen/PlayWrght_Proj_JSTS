import {test,expect} from '@playwright/test'

test('Script With Brower Fixture',async({browser})=>{
    const browsercontxt = await browser.newContext()
    const pagecontxt = await browsercontxt.newPage()
    
    const ss = await pagecontxt.goto('https://www.makemytrip.global/flight/search?itinerary=DFW-BOM-15/12/2025&tripType=O&paxType=A-1_C-0_I-0&intl=true&cabinClass=E&lang=eng')
    //pagecontxt.pause();
    await pagecontxt.waitForTimeout(5000)
    // pagecontxt.getByAltText
    // pagecontxt.getByLabel
    // pagecontxt.getByPlaceholder
    // pagecontxt.getByRole
    // pagecontxt.getByTestId
    // pagecontxt.getByText
    // pagecontxt.getByTitle

    const arrivalCity = await pagecontxt.getByText('Mumbai');

    for (let e of arrivalCity)
    {
        e.Highlight()
    }
    
    await pagecontxt.waitForTimeout(3000)
    let cnt = arrivalCity.count
    console.log('Mumbai count - ',cnt)
    
})

test('Finding Count of Mumbai text',async({browser})=>{

    const browsercontxt = await browser.newContext()
    const pagecontxt = await browsercontxt.newPage()
    
    const ss = await pagecontxt.goto('https://www.makemytrip.global/flight/search?itinerary=DFW-BOM-15/12/2025&tripType=O&paxType=A-1_C-0_I-0&intl=true&cabinClass=E&lang=eng')
    //pagecontxt.pause();
    await pagecontxt.waitForTimeout(5000)

    const arrivalCity = await pagecontxt.getByText('Mumbai');

    for (let e of arrivalCity())
    {
        e.Highlight()
    }
    
    await pagecontxt.waitForTimeout(3000)
    let cnt = arrivalCity.count
    console.log('Mumbai count - ',cnt)
})

test('Clicking on Date element', async({browser})=>
{
    const browsercontxt = await browser.newContext()
    const pagecontxt = await browsercontxt.newPage()
    
    const ss = await pagecontxt.goto('https://www.globalsqa.com/demo-site/datepicker/')

    await pagecontxt.waitForTimeout(2000)
    //await pagecontxt.frameLocator('.demo-frame').nth(0).locator('#datepicker').highlight()
    //await pagecontxt.locator('.demo-frame').contentFrame().locator('#datepicker').highlight()
    //await pagecontxt.waitForTimeout(2000)
    //await pagecontxt.locator('.demo-frame').contentFrame().locator('#datepicker').click()
    //await pagecontxt.locator('.demo-frame').locator('#datepicker').click()
    //await pagecontxt.locator('#datepicker').click()

    // await pagecontxt.frameLocator('.demo-frame').nth(0).locator('#datepicker').highlight()
    // await pagecontxt.frameLocator('.demo-frame').nth(0).locator('#datepicker').click()
    // await pagecontxt.frameLocator('.demo-frame').nth(0).locator('#datepicker').getByRole('link',{name: '12'}).click()
    
    //*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]/a

    //const ifrm = pagecontxt.frameLocator('.demo-frame').nth(0)
    //await ifrm.locator('#datepicker').click()
    //await ifrm.locator('#datepicker').



    //const frm =  pagecontxt.frameLocator('.demo-frame').nth(0)
    const frm =  pagecontxt.locator('iframe[class="demo-frame"]').nth(0).contentFrame()
    const dp = frm.locator('#datepicker')
    await dp.click()
    await dp.getByRole('link',{name: '12'}).click()
    await pagecontxt.waitForTimeout(2000)
})


