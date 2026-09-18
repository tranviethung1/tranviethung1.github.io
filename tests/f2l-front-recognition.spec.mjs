import { expect, test } from '@playwright/test';

async function openTrainer(page) {
  const browserErrors = [];
  page.on('pageerror', error => browserErrors.push(error.message));
  await page.goto('/f2l/?test=1');
  await expect.poll(
    () => page.evaluate(() => Boolean(window.__rubikTest?.validateFrontColorRecognition)),
    { timeout: 30_000, message: `Trainer did not expose front-recognition hooks: ${browserErrors.join('\n')}` },
  ).toBe(true);
  return browserErrors;
}

test.describe('F2L front-color recognition', () => {
  test('y reorientation, post-y detect/verify, parser tokens, and FR×front sweep', async ({ page }) => {
    await openTrainer(page);

    const report = await page.evaluate(() => window.__rubikTest.validateFrontColorRecognition());

    console.table(report.orientation.map(item => ({
      front: item.front,
      yMoves: item.yMoves.join(' ') || '(none)',
      facingAtF: item.facingAtF,
      result: item.passed ? 'PASS' : 'FAIL',
    })));
    console.log('ĐỎ · F2L -1 (F R′ F′ R U) regression', report.regression);
    console.table(report.samples.map(item => ({
      caseId: item.caseId,
      front: item.front,
      slot: item.slot,
      detected: item.detected,
      path: item.verified ? 'verified' : item.extraction ? 'extraction' : 'none',
      result: item.passed ? 'PASS' : 'FAIL',
    })));
    console.log('FR setup × front sweep', {
      total: report.sweep.total,
      pass: report.sweep.pass,
      failCount: report.sweep.failCount,
      fails: report.sweep.fails,
    });
    console.log('move tokens', report.tokens);

    expect(report.orientationPassed, 'each side color must reach F via y/y′/y y without breaking F2L').toBe(true);
    expect(report.regression.passed, 'logged ĐỎ · BR pose F R′ F′ R U must verify as F2L -1 after y′').toBe(true);
    expect(report.regression.verified?.caseId).toBe('F2L -1');
    expect(report.regression.slot).toBe('BR');
    expect(report.samplesPassed, 'sample cases must verify or extract on every front color').toBe(true);
    expect(report.sweep.failCount, `FR setup × front sweep failures: ${JSON.stringify(report.sweep.fails)}`).toBe(0);
    expect(report.tokenPassed, 'L3/R3′/y2/U2 must expand to quarter-turn tokens').toBe(true);
    expect(report.passed).toBe(true);
  });

  test('CAM and ĐỎ bring the chosen center to F (not the opposite side)', async ({ page }) => {
    await openTrainer(page);

    const cam = await page.evaluate(() => window.__rubikTest.dumpCenters('y'));
    const do_ = await page.evaluate(() => window.__rubikTest.dumpCenters('y′'));
    const bringCam = await page.evaluate(() => window.__rubikTest.dumpCenters(''));

    expect(cam.centers.R).toBe('F');
    expect(do_.centers.L).toBe('F');
    expect(bringCam.bringR).toEqual(['y']);
  });
});
