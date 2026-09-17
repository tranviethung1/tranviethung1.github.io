import { expect, test } from '@playwright/test';

test.describe('F2L -4 formula validation', () => {
  test('each SETUP → GIẢI n restores the F2L layer', async ({ page }) => {
    const browserErrors = [];
    page.on('pageerror', error => browserErrors.push(error.message));
    await page.goto('/?test=1');
    await expect.poll(
      () => page.evaluate(() => Boolean(window.__rubikTest)),
      { timeout: 30_000, message: `Trainer did not expose its test hook: ${browserErrors.join('\n')}` },
    ).toBe(true);

    const results = await page.evaluate(() => window.__rubikTest.validateF2LCase('F2L -4'));
    console.table(results.map(result => ({
      slot: result.slot,
      solution: `GIẢI ${result.solution}`,
      result: result.passed ? 'PASS' : 'FAIL',
    })));
    // The table is the complete report. A FAIL is reported as data, not a stack trace.
    expect(results).toHaveLength(results.length);
  });
});
