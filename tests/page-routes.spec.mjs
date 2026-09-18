import { expect, test } from '@playwright/test';

test('landing page routes users into the F2L trainer', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'MỞ LUYỆN F2L →' })).toHaveAttribute('href', './f2l/index.html');
  await page.getByRole('link', { name: 'MỞ LUYỆN F2L →' }).click();
  await expect(page).toHaveURL(/\/f2l\/(?:index\.html)?$/);
  await expect(page.getByRole('button', { name: 'TẬP TRUNG F2L' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'XÁO TRỘN F2L' })).toBeVisible();
});
