import { test, expect } from '@playwright/test';

test('Parabank Application', async ({ page }) => {

  // 1. Launch application
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // 2. Verify logo is displayed
  const logo = page.locator('img[title="ParaBank"]');
  await expect(logo).toBeVisible();

  // 3. Verify caption
  await expect(page.locator('text=Experience the difference')).toBeVisible();

  // 4 & 5. Enter invalid username and empty password
  await page.fill('input[name="username"]', 'invalidUser');
  await page.fill('input[name="password"]', '');

  // 6. Click login
  await page.click('input[value="Log In"]');

  // 7. Verify error message
  await expect(page.locator('text=Please enter a username and password.')).toBeVisible();

  // 8. Click Admin Page link
  await page.click('text=Admin Page');

  // 9. Select "SOAP" radio button (DBA mode)
  await page.check('input[value="soap"]');

  // 10. Scroll to dropdown
  const dropdown = page.locator('select#loanProvider');
  await dropdown.scrollIntoViewIfNeeded();

  // 11. Select "Web Service"
  await dropdown.selectOption({ label: 'Web Service' });

  // 12. Click Submit
  await page.click('input[value="Submit"]');

  // 13. Verify success message
  await expect(page.locator('text=Settings saved successfully')).toBeVisible();

  // 14. Click Services page link
  await page.click('text=Services');

  // 15. Wait for Services page
  await page.waitForLoadState('load');

  // 16.Scroll down till bookstore services table
    await bookstoreServicesHeader.scrollIntoViewIfNeeded();
    console.log("Scrolled down till bookstore services table successfully.");   

    // 17.get total rows of books store services table
    const rows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
    const totalRows = await rows.count();

    // 18.get total columns of books store services table
    const columns = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]//td');
    const totalColumns =await columns.count();

    // 19.Print table data (row wise and column wise data)
    for (let r:number = 1; r<=totalRows ; r++){
        for (let c:number = 1; c<=totalColumns ;c++){
            const cell = page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[${r}]//td[${c}]`);
            console.log(`Row ${r} Column ${c} value is : `+await cell.textContent());
        }
    }

});


    