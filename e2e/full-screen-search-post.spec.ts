import { test, expect } from '@playwright/test';

test('Tests de full-screen-search-post', async ({ page }) => {
  await page.goto('http://localhost:8100/tabs/home');
  await page.goto('http://localhost:8100/tabs/add');
  await page.locator('ion-segment-button').filter({ hasText: 'Recherche' }).dblclick();
  await page.locator('ion-card').filter({ hasText: 'Alakazambase1' }).getByRole('img').first().click();
  await page.locator('form img').click();
  await page.locator('#ion-overlay-1 img').click();
});