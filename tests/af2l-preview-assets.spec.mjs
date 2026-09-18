import { expect, test } from '@playwright/test';

test('every AF2L card uses its own refreshed Acubemy preview', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/f2l/');
  await page.getByRole('button', { name: 'Nâng cao' }).click();

  for (let number = 1; number <= 45; number += 1) {
    const preview = page.locator(`.advanced-method[data-method-id="AF2L -${number}"] img`);
    await expect(preview).toHaveAttribute('src', `previews/af2l-${number}.png`);
    await expect(preview).toHaveJSProperty('complete', true);
    expect(await preview.evaluate(image => image.naturalWidth === 360 && image.naturalHeight === 360)).toBe(true);
  }
});
