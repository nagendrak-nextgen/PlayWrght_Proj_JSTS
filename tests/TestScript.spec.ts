import {test,expect} from '@playwright/test'

test.only('Script With Brower Fixture',async({browser})=>{
    const browsercontxt = await browser.newContext()
    const pagecontxt = await browsercontxt.newPage()
    
    const ss = await pagecontxt.goto('https://google.com')
    //pagecontxt.pause();
    await pagecontxt.waitForTimeout(500000)

})

test('Script With Page Fixture',async({page})=>{

    
})
