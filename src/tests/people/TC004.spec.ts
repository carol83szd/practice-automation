import { test, expect } from "../../fixtures/LoggedInFixture";
import { PeoplesPage } from "../../pages/PeoplesPage";

test("Verify a new person can't be created with mandatory fields empty", async ({
  page,
}) => {
  const peoplesPage = new PeoplesPage(page);
  await peoplesPage.goTo();
  await peoplesPage.clickAddPersonButton();
  await peoplesPage.fillFirstName("Test User");
  await peoplesPage.clickSummitButton();
  const message = await peoplesPage.getMandatoryLastNameMessage();
  expect(message).toContain("Please enter Lastname");
});
