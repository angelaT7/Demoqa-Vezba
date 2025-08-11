import { test, expect } from '@playwright/test';

test('Use the baseURL from Config', async ({ page }) => {

    await page.goto('/');

})