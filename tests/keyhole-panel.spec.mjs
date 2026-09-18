import { expect, test } from '@playwright/test';

test('Keyhole uses fixed matching setup and solve pairs', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/?test=1');
  await page.getByRole('button', { name: 'Keyhole' }).click();

  const sheet = page.locator('#dock-sheet-keyhole');
  await expect(sheet).toBeVisible();
  await expect(sheet.locator('.keyhole-case')).toHaveCount(2);
  await expect(sheet.locator('.keyhole-steps .opt-row[data-alg-id$=":setup"] .opt-label').first()).toContainText('SETUP 1');
  await expect(sheet.locator('.keyhole-steps .opt-row[data-alg-id$=":solve"] .opt-label').first()).toContainText('GIẢI 1');
  await expect(sheet.locator('.keyhole-steps .opt-controls').first()).toBeVisible();

  const results = await page.evaluate(() => window.__rubikTest.validateKeyholePairs());
  expect(results).toHaveLength(2);
  expect(results.filter(result => !result.passed)).toEqual([]);
});
