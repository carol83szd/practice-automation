import { test, expect } from "../../fixtures/LoggedInFixture";
import { DashboardPage } from "../../pages/DashboardPage";

test("Verify user success login with valid credentials", async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await expect(dashboard.getLogo).toBeTruthy();
  await expect(dashboard.getSideBar).toBeTruthy();
});
