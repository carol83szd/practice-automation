import { test as base } from "@playwright/test";
import { PeoplesPage } from "../pages/PeoplesPage";

export const test = base.extend<{ peopelsPage: PeoplesPage }>({
  peopelsPage: async ({ page }, use) => {
    const peopelsPage = new PeoplesPage(page);
    await use(peopelsPage);
  },
});

export { expect } from "@playwright/test";
