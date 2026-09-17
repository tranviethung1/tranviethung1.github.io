import { expect, test } from '@playwright/test';

test('advanced panel mirrors the horizontal F2L case strip and remembers viewed cases', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  await page.getByRole('button', { name: 'Nâng cao' }).click();
  const list = page.locator('#advanced-methods');
  await expect(list.locator('.advanced-method')).toHaveCount(45);
  await expect(list).toHaveCSS('overflow-x', 'auto');

  const first = list.locator('.advanced-method[data-method-id="AF2L -1"] .advanced-method-main');
  await first.click();
  await expect(list.locator('.advanced-method[data-method-id="AF2L -1"]')).toHaveClass(/is-open/);
  await expect(list.locator('.advanced-method[data-method-id="AF2L -1"]')).toHaveClass(/is-viewed/);
  await expect(list.locator('.advanced-method[data-method-id="AF2L -2"]')).toBeHidden();
  await expect(list.locator('.advanced-method.is-open .slot-tabs')).toBeVisible();

  await page.locator('#advanced-sheet-drag').click();
  await expect(list.locator('.advanced-method[data-method-id="AF2L -1"]')).not.toHaveClass(/is-open/);
  await expect(list.locator('.advanced-method[data-method-id="AF2L -1"]')).toHaveClass(/is-active/);
  await expect(list.locator('.advanced-method[data-method-id="AF2L -2"]')).toBeVisible();

  await page.reload();
  await page.getByRole('button', { name: 'Nâng cao' }).click();
  await expect(page.locator('.advanced-method[data-method-id="AF2L -1"]')).toHaveClass(/is-viewed/);

  await list.evaluate(element => { element.scrollLeft = element.scrollWidth; });
  await expect(list.getByRole('button', { name: 'AF2L - 45' })).toBeVisible();
});
