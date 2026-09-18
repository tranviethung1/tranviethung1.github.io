import { expect, test } from '@playwright/test';
import { f2lSetups } from '../f2l/f2l-data.js';

const caseData = f2lSetups.find(entry => entry.id === 'F2L -2');

test.describe('F2L -2 formula validation', () => {
  test('each SETUP → GIẢI n restores the F2L layer', async ({ page }) => {
    const browserErrors = [];
    page.on('pageerror', error => browserErrors.push(error.message));
    await page.goto('/?test=1');
    await expect.poll(
      () => page.evaluate(() => Boolean(window.__rubikTest)),
      { timeout: 30_000, message: `Trainer did not expose its test hook: ${browserErrors.join('\n')}` },
    ).toBe(true);

    expect(caseData, 'F2L -2 must exist in the shared formula catalog').toBeTruthy();
    const expectedFormulas = Object.values(caseData.slots).flatMap(({ solutions }) => solutions);
    const results = await page.evaluate(() => window.__rubikTest.validateF2LCase('F2L -2'));
    console.table(results.map(result => ({
      slot: result.slot,
      solution: `GIẢI ${result.solution}`,
      result: result.passed ? 'PASS' : 'FAIL',
    })));
    expect(results).toHaveLength(expectedFormulas.length);
  });
});
