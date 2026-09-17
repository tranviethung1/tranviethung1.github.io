import { expect, test } from '@playwright/test';

test.describe('AF2L 16 formula validation', () => {
  test('each SETUP → GIẢI n restores the F2L layer', async ({ page }) => {
    const browserErrors = [];
    page.on('pageerror', error => browserErrors.push(error.message));
    await page.goto('/?test=1');
    await expect.poll(
      () => page.evaluate(() => Boolean(window.__rubikTest?.validateAF2LCase)),
      { timeout: 30_000, message: `Trainer did not expose its AF2L test hook: ${browserErrors.join('\n')}` },
    ).toBe(true);

    const results = await page.evaluate(id => window.__rubikTest.validateAF2LCase(id), 'AF2L 16');
    console.table(results.map(result => ({
      case: 'AF2L 16',
      slot: result.slot,
      solution: `GIẢI ${result.solution}`,
      result: result.passed ? 'PASS' : 'FAIL',
    })));
    const failures = results.filter(result => !result.passed);
    expect(failures, `Invalid algorithms: ${failures.map(result => `${result.slot} · GIẢI ${result.solution}`).join(', ')}`).toEqual([]);
  });
});
