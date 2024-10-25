import { expect, browser, $ } from "@wdio/globals";
import SignUp from "../../pageObject/activityforms/signup";
import FormUtils from "../../utils/activityobj/forms";
describe("Heroku_App_SignUp_TC001", () => {
  it("Verify user can successfully fill up the form.", async () => {
    await browser.url("https://thinking-tester-contact-list.herokuapp.com/");
    await $('//button[@id="signup"]').click();
    await SignUp.navigateToSignUp();
    await FormUtils.fillInputField(SignUp.firstNameInput, "SampleFirstName");
    await FormUtils.fillInputField(SignUp.lastNameInput, "SampleLastName");
    await FormUtils.fillInputField(
      SignUp.emailInput,
      "test_20241024120022@test.com"
    );
    //test_20241024120022@test.com
    await FormUtils.fillInputField(SignUp.passwordInput, "SamplePassword");
    await FormUtils.clickButton(SignUp.submitButton);
    await browser.pause(5000);
    await expect(browser).toHaveUrl(
      "https://thinking-tester-contact-list.herokuapp.com/contactList"
    );
  });
});
