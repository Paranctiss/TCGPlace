import { test, expect } from '@playwright/test';

// Il faut avoir le set base1 only
test('Tests de add-reference-post', async ({ page, browserName }) => {
  console.log("nom browser : " + browserName.toLowerCase())
  await page.goto('http://localhost:8100/tabs/add');
  await page.locator('ion-card-header').filter({ hasText: 'Alakazambase1' }).getByRole('paragraph').nth(1).isVisible();
  await page.getByText('Alakazam').isVisible();
  const imgLocator = await page.locator('ion-card').filter({ hasText: 'Alakazambase1' }).locator('img').first();
  if (browserName.toLowerCase() === 'webkit') {
    // Interaction utilisateur nécessaire pour Safari
    await imgLocator.hover();
    await imgLocator.click({force:true});
  }else{
    await imgLocator.click();
  }
  
  await page.locator('ion-title div').click();
});