import { expect, browser, $ } from "@wdio/globals";
import Login from "../../pageObject/activityforms/login";
import UserTable from "../../pageObject/activityforms/usertable";
import FormUtils from "../../utils/activityobj/forms";

describe("Heroku_App_Delete_Contact_TC005", () => {
  it("Verify user can delete a contact.", async () => {
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
  });
  it("Verify user can delete a contact.", async () => {
    await FormUtils.clickButton(UserTable.lastRow);
    await FormUtils.clickButton(UserTable.deleteButton);
    await browser.acceptAlert();
    await expect(browser).toHaveUrl(
      "https://thinking-tester-contact-list.herokuapp.com/contactList"
    );
    await browser.pause(5000);
  });
});
