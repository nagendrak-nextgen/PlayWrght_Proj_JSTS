import {test,expect} from '@playwright/test'

test.only('Script With Brower Fixture',async({browser})=>{
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

    const arrivalCity = pagecontxt.getByText('Mumbai');

    for (let e of await arrivalCity)
    {
        e.Highlight
    }
    
    await pagecontxt.waitForTimeout(3000)
    let cnt = arrivalCity.count
    console.log('Mumbai count - ',cnt)
    
})

test('Script With Page Fixture',async({page})=>{

    
})
