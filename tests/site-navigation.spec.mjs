import { expect, test } from '@playwright/test';

test('hamburger navigation exposes the Statistics submenu', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/f2l/');

  const toggle = page.getByRole('button', { name: 'Mở menu điều hướng' });
  const drawer = page.locator('#site-nav');
  await toggle.click();
  await expect(drawer).toHaveClass(/is-open/);
  await expect(drawer.getByRole('button', { name: 'Playground' })).toBeVisible();
  await expect(drawer.getByRole('button', { name: 'Training' })).toBeVisible();

  const statistics = drawer.getByRole('button', { name: 'Statistics' });
  await statistics.click();
  await expect(statistics).toHaveAttribute('aria-expanded', 'true');
  for (const name of ['OLL', 'PLL', 'Cross', 'F2L']) await expect(drawer.getByRole('button', { name })).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(drawer).not.toHaveClass(/is-open/);
});
