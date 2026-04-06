import { test, expect } from '@playwright/test';
test('demosite Application', async ({ page }) => {

  // 1. Launch application
  await page.goto('https://demoqa.com/automation-practice-form');

  //2. Wait for Page-load
 

  //3. Enter First name and Last name
  const firstname = await page.locator('//input[@id="firstName"]');
    await firstname.fill('Prathyu');
  const lastname = await page.locator('//input[@id="lastName"]');
    await lastname.fill('Bussa');

 //4. Enter Email
 const email = await page.locator('//input[@id="userEmail"]');
    await email.fill('Bussa@gmail.com');

//5. Select Gender (Male)
 await page.check('//input[@value="Female"]');

//6. Enter mobile number
const mobilenumber = await page.locator('//input[@id="userNumber"]');
    await mobilenumber.fill('876543210');

//7.Select DOB (1-Feb-1991)
 await page.check('//input[@value="Female"]');

//8.Search and Select Computer Science and English
await page.fill('#subjectsInput', 'Computer Science');
  await page.keyboard.press('Enter');

  await page.fill('#subjectsInput', 'English');
  await page.keyboard.press('Enter');

//9.Select Hobbies as Sports and Reading
await page.check('//input[@id="hobbies-checkbox-1"]');
await page.check('//input[@id="hobbies-checkbox-2"]');

//10.Upload photo
const uploadphoto = await page.locator('//input[@id="uploadPicture"]');
await uploadphoto.setInputFiles("C:\\AutomationTraining\\playwright-training\\file\\photo.png");

//11.Submit Details
await page.click('//button[@id="submit"]');

});