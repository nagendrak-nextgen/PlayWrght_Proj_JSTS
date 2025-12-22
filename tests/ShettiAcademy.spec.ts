
import { test,expect} from '@playwright/test'
import { assert } from 'console'
test('Shtti Academy Registration',async ({page})=>
{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await expect.soft(page.locator('.login-title')).toBeVisible()
    await page.locator('.text-reset').click()
    await page.waitForTimeout(1000)

    //await expect.soft(page.getByText('Register')).toBeVisible()
    await expect(page.locator('//section[2]/div/div[2]/h1')).toBeVisible()
    await expect(page.locator('h1.login-title')).toBeVisible()
    let str_Register = page.locator('h1.login-title').textContent()
    expect(str_Register,"Register")
    
    //await page.locator('//section[2]/div/div[2]/h1').highlight();
    //await page.getByRole('input',)
    //await page.getByRole('heading',{name:'h1'}).getByText('Register').highlight();
    //page.scr
   
     await page.locator('#firstName').fill("")
     await page.getByLabel("First Name").fill("")
     expect(page.locator('#firstName')).toBeChecked()
    // await page.getByPlaceholder('Last Name')
    // await page.locator('#userEmail')
    // await page.locator('#userMobile')
    // await page.locator('select').selectOption("Doctor")
    await page.getByLabel('Male').check()

    // await page.getByRole('list',{name:'occupation'}).selectText('Doctor')

    //expect.soft(page.locator('.login-title'))
    await page.pause()
})