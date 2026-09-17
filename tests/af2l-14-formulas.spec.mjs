import { expect, test } from '@playwright/test';

test.describe('AF2L -14 formula validation', () => {
  test('each SETUP → GIẢI n restores the F2L layer', async ({ page }) => {
    const browserErrors = [];
    page.on('pageerror', error => browserErrors.push(error.message));
    await page.goto('/?test=1');
    await expect.poll(
      () => page.evaluate(() => Boolean(window.__rubikTest?.validateAdvancedMethod)),
      { timeout: 30_000, message: `Trainer did not expose its advanced-method test hook: ${browserErrors.join('\n')}` },
    ).toBe(true);

    const results = await page.evaluate(() => window.__rubikTest.validateAdvancedMethod('AF2L -14'));
    console.table(results.map(result => ({
      slot: result.slot,
      solution: `GIẢI ${result.solution}`,
      result: result.passed ? 'PASS' : 'FAIL',
    })));
    const failures = results.filter(result => !result.passed);
    expect(failures, `Invalid algorithms: ${failures.map(result => `${result.slot} · GIẢI ${result.solution}`).join(', ')}`).toEqual([]);
  });
});
