import { test, expect } from "../../fixtures/LoggedInFixture";
import { PeoplesPage } from "../../pages/PeoplesPage";

test("Verify a new person can be created", async ({ page }) => {
  const peoplesPage = new PeoplesPage(page);
  await peoplesPage.goTo();
  await peoplesPage.clickAddPersonButton();
  await peoplesPage.fillFirstName("Test User");
  await peoplesPage.fillLastName("Test User");
  await peoplesPage.clickSummitButton();
  const toast = await peoplesPage.successToast();
  const message = await peoplesPage.getSucessMessage();
  expect(toast).toBeVisible();
  expect(message).toContain("Successfully Created the document in Model");
});
