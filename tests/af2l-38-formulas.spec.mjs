import { expect, test } from '@playwright/test';
import { advancedMethods } from '../f2l/af2l-data.js';

const methodData = advancedMethods.find(entry => entry.id === 'AF2L -38');

test.describe('AF2L -38 formula validation', () => {
  test('each SETUP → GIẢI n restores the F2L layer', async ({ page }) => {
    const browserErrors = [];
    page.on('pageerror', error => browserErrors.push(error.message));
    await page.goto('/?test=1');
    await expect.poll(
      () => page.evaluate(() => Boolean(window.__rubikTest?.validateAdvancedMethod)),
      { timeout: 30_000, message: `Trainer did not expose its advanced-method test hook: ${browserErrors.join('\n')}` },
    ).toBe(true);

    expect(methodData, 'AF2L -38 must exist in the shared formula catalog').toBeTruthy();
    const expectedFormulas = Object.values(methodData.slots).flatMap(({ solutions }) => solutions);
    const results = await page.evaluate(() => window.__rubikTest.validateAdvancedMethod('AF2L -38'));
    console.table(results.map(result => ({
      slot: result.slot,
      solution: `GIẢI ${result.solution}`,
      result: result.passed ? 'PASS' : 'FAIL',
    })));
    expect(results).toHaveLength(expectedFormulas.length);
    const failures = results.filter(result => !result.passed);
    expect(failures, `Invalid algorithms: ${failures.map(result => `${result.slot} · GIẢI ${result.solution}`).join(', ')}`).toEqual([]);
  });
});
