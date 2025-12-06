import { Page } from "@playwright/test";
import { LoginLocators } from "../locators/LoginLocators";

export class LoginPage {
  constructor(public page: Page) {}

  async goTo() {
    await this.page.goto("/login");
  }

  async fillUsernameInput(username: string) {
    await this.page.locator(LoginLocators.usernameInput).fill(username);
  }

  async fillPasswordInput(password: string) {
    await this.page.locator(LoginLocators.passwordInput).fill(password);
  }

  async clickLoginButton() {
    await this.page.locator(LoginLocators.loginButton).click();
  }

  async getToast() {
    const toast = await this.page.locator(LoginLocators.errorToast);
    await toast.waitFor({ state: "visible", timeout: 5000 });
    return toast;
  }

  async getErrorMessage() {
    const mess = await this.page.locator(LoginLocators.errorToastMessage);
    await mess.waitFor({ state: "visible", timeout: 5000 });
    const txt = await mess.textContent();
    return txt;
  }
}
