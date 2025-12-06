import { Page } from "@playwright/test";
import { DashboardLocators } from "../locators/DashboardLocators";

export class DashboardPage {
  constructor(public page: Page) {}

  async goTo() {
    await this.page.goto("/");
  }

  async getLogo() {
    return this.page.locator(DashboardLocators.logo);
  }

  async getSideBar() {
    return this.page.locator(DashboardLocators.sidebar);
  }
}
