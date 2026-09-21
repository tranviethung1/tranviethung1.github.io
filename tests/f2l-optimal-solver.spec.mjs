import { test, expect } from '@playwright/test';

test.describe('Optimal F2L solver', () => {
  test('solves a catalog F2L state without relying on move history', async ({ page }) => {
    await page.goto('/f2l/?test=1');
    await page.waitForFunction(() => Boolean(window.__rubikTest?.findOptimalF2LPlanForTest));
    const result = await page.evaluate(() =>
      window.__rubikTest.solveOptimalF2LFromSetup('F R′ F′ R', 10_000)
    );
    expect(result.verified).toBeTruthy();
    expect(result.moves.length).toBeGreaterThan(0);
    expect(result.steps.length).toBeGreaterThan(0);
  });
});
