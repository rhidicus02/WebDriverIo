import { expect, browser, $ } from "@wdio/globals";
import Login from "../../pageObject/activityforms/login";
import UserTable from "../../pageObject/activityforms/usertable";
import FormUtils from "../../utils/activityobj/forms";

describe("Heroku_App_Edit_Contact_TC004", () => {
  it("Verify user can successfully edit a contact.", async () => {
    // Step 1: Log in
    await Login.navigateToLogin();
    await FormUtils.fillInputField(
      Login.emailInput,
      "test_20241024120022@test.com"
    );
    await FormUtils.fillInputField(Login.passwordInput, "SamplePassword");
    await FormUtils.clickButton(Login.submitButton);

    // Step 2: Verify navigation to contact list
    await expect(browser).toHaveUrl(
      "https://thinking-tester-contact-list.herokuapp.com/contactList"
    );

    // Step 3: Click the first contact in the list
    const firstContact = await $(
      "//table[@id='myTable']//tr[@class='contactTableBodyRow']"
    );
    await firstContact.click();

    // Step 4: Verify navigation to the contact details page
    const editButton = await $(
      "//div[@class='main-content']//button[@id='edit-contact']"
    );
    await editButton.click();

    // Step 5: Update the country
    const countryInput = UserTable.countryEditInput;

    // Clear the current country value

    await FormUtils.fillInputField(countryInput, ""); // Clear the input field

    const newCountry = "Water Country"; // Specify the new country value

    await FormUtils.fillInputField(countryInput, newCountry); // Set the new country value
    // Step 6: Click the submit button
    await FormUtils.clickButton(UserTable.submitEditButton);

    const returnButton = await $(
      "//div[@class='main-content']//button[@id='return']"
    );
    await returnButton.click();

    // Step 7: Verify navigation to the contact list
    await expect(browser).toHaveUrl(
      "https://thinking-tester-contact-list.herokuapp.com/contactList"
    );

    // Step 8: Verify the updated country
    const countryRow = await $(
      `//tr[@class='contactTableBodyRow']//td[contains(text(), '${newCountry}')]`
    );
    expect(countryRow).toBeDisplayed();
    await browser.pause(5000);
  });
});
