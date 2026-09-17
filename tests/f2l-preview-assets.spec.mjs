import { expect, test } from '@playwright/test';

test('the first twelve F2L cards use refreshed preview images', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: '4 hướng' }).click();

  for (let number = 1; number <= 12; number += 1) {
    const preview = page.locator(`.case-card[data-case-id="F2L -${number}"] img.preview`);
    await expect(preview).toHaveAttribute('src', `previews/f2l-${number}.png`);
    await expect(preview).toHaveJSProperty('complete', true);
    expect(await preview.evaluate(image => image.naturalWidth === 420 && image.naturalHeight === 420)).toBe(true);
    expect(await preview.evaluate(image => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      let minX = canvas.width;
      let minY = canvas.height;
      let maxX = 0;
      let maxY = 0;
      for (let index = 0; index < pixels.length; index += 4) {
        if (pixels[index] < 250 || pixels[index + 1] < 250 || pixels[index + 2] < 250) {
          const pixel = index / 4;
          const x = pixel % canvas.width;
          const y = Math.floor(pixel / canvas.width);
          minX = Math.min(minX, x); minY = Math.min(minY, y);
          maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
        }
      }
      return { corner: [...pixels.slice(0, 3)].join(','), width: maxX - minX + 1, height: maxY - minY + 1 };
    })).toEqual({ corner: '255,255,255', width: 386, height: 390 });
  }
});
