import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test("Verify user can-t login with invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.fillUsernameInput("adsjsakjd@asassa.com");
  await loginPage.fillPasswordInput("asasasa");
  await loginPage.clickLoginButton();
  const toast = await loginPage.getToast();
  await expect(toast).toBeVisible();
  const message = await loginPage.getErrorMessage();
  expect(message).toContain("No account with this email has been registered.");
});
