import { expect, browser, $ } from "@wdio/globals";
import Login from "../../pageObject/activityforms/login";
import FormUtils from "../../utils/activityobj/forms";
describe("Heroku_App_Login_User_TC002", () => {
  it("Verify user can successfully login the newly added account.", async () => {
    await Login.navigateToLogin();
    await FormUtils.fillInputField(
      Login.emailInput,
      "test_20241024120022@test.com"
    );
    await FormUtils.fillInputField(Login.passwordInput, "SamplePassword");
    await FormUtils.clickButton(Login.submitButton);
    await expect(browser).toHaveUrl(
      "https://thinking-tester-contact-list.herokuapp.com/contactList"
    );
    await browser.pause(5000);
  });
});
