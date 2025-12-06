import { Page } from "@playwright/test";
import { PeoplesLocators } from "../locators/PeoplesLocators";

export class PeoplesPage {
  constructor(public page: Page) {}

  async goTo() {
    await this.page.goto("/people");
  }

  async clickAddPersonButton() {
    await this.page.locator(PeoplesLocators.addPersonButton).click();
  }

  async waitForSideForm() {
    const waiter = await this.page.locator(PeoplesLocators.sideForm);
    await waiter.waitFor({ state: "visible", timeout: 3000 });
  }

  async fillFirstName(name: string) {
    await this.waitForSideForm();
    await this.page.locator(PeoplesLocators.firstNameInput).fill(name);
  }

  async fillLastName(lastname: string) {
    await this.waitForSideForm();
    await this.page.locator(PeoplesLocators.lastnameInput).fill(lastname);
  }

  async clickSummitButton() {
    await this.waitForSideForm();
    await this.page.locator(PeoplesLocators.summitButton).click();
  }

  async successToast() {
    const isDisplayed = await this.page.locator(
      PeoplesLocators.successfullToast
    );
    await isDisplayed.waitFor({ state: "visible", timeout: 3000 });
    return isDisplayed;
  }

  async getSucessMessage() {
    const message = await this.page.locator(PeoplesLocators.successMessage);
    await message.waitFor({ state: "visible", timeout: 3000 });
    return message.textContent();
  }

  async getMandatoryLastNameMessage() {
    const message = await this.page.locator(PeoplesLocators.mandatoryField);
    await message.waitFor({ state: "visible", timeout: 3000 });
    return message.textContent();
  }
}
