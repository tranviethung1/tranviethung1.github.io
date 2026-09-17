import { expect, test } from '@playwright/test';

const af2lCaseIds = Array.from({ length: 45 }, (_, index) => `AF2L ${index + 1}`);

test.describe('AF2L formula validation', () => {
  for (const caseId of af2lCaseIds) {
    test(`${caseId}: each SETUP → GIẢI n restores the F2L layer`, async ({ page }) => {
      const browserErrors = [];
      page.on('pageerror', error => browserErrors.push(error.message));
      await page.goto('/?test=1');
      await expect.poll(
        () => page.evaluate(() => Boolean(window.__rubikTest?.validateAF2LCase)),
        { timeout: 30_000, message: `Trainer did not expose its AF2L test hook: ${browserErrors.join('\n')}` },
      ).toBe(true);

      const results = await page.evaluate(id => window.__rubikTest.validateAF2LCase(id), caseId);
      console.table(results.map(result => ({
        case: caseId,
        slot: result.slot,
        solution: `GIẢI ${result.solution}`,
        result: result.passed ? 'PASS' : 'FAIL',
      })));
      expect(results).toHaveLength(results.length);
    });
  }
});
