import { expect, browser, $ } from "@wdio/globals";
import AddUser from "../../pageObject/activityforms/usertable";
import FormUtils from "../../utils/activityobj/forms";
import Login from "../../pageObject/activityforms/login";

describe("Heroku_App_Modify_Contact_TC003_TC004_TC005_006", () => {
  it("Heroku_App_Login_User_TC002", async () => {
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
    await browser.pause(3000);
  });
  it("Heroku_App_Add_Contact_TC003", async () => {
    const contacts = [
      {
        firstName: "Naruto",
        lastName: "Uzumaki",
        birthday: "1990-01-01",
        email: "narutouzumaki@test.com",
        phone: "1234567890",
        streetAddress1: "1234 Hokage St",
        streetAddress2: "Apt 123",
        city: "Konoha",
        state: "Land of Fire",
        postalCode: "12345",
        country: "Fire Country",
      },
      {
        firstName: "Sasuke",
        lastName: "Uchiha",
        birthday: "1990-01-01",
        email: "sasukeuchiha@test.com",
        phone: "0987654321",
        streetAddress1: "5678 Uchiha St",
        streetAddress2: "Apt 456",
        city: "Konoha",
        state: "Land of Fire",
        postalCode: "12345",
        country: "Fire Country",
      },
      {
        firstName: "Sakura",
        lastName: "Haruno",
        birthday: "1990-01-01",
        email: "sakuraharuno@test.com",
        phone: "1122334455",
        streetAddress1: "9101 Haruno St",
        streetAddress2: "Apt 789",
        city: "Konoha",
        state: "Land of Fire",
        postalCode: "12345",
        country: "Fire Country",
      },
    ];

    for (const contact of contacts) {
      await AddUser.navigateToAddUserForm();
      await FormUtils.fillInputField(AddUser.firstNameInput, contact.firstName);
      await FormUtils.fillInputField(AddUser.lastNameInput, contact.lastName);
      await FormUtils.fillInputField(AddUser.birthdayInput, contact.birthday);
      await FormUtils.fillInputField(AddUser.emailInput, contact.email);
      await FormUtils.fillInputField(AddUser.phoneInput, contact.phone);
      await FormUtils.fillInputField(
        AddUser.streetAddress1Input,
        contact.streetAddress1
      );
      await FormUtils.fillInputField(
        AddUser.streetAddress2Input,
        contact.streetAddress2
      );
      await FormUtils.fillInputField(AddUser.cityInput, contact.city);
      await FormUtils.fillInputField(AddUser.stateInput, contact.state);
      await FormUtils.fillInputField(
        AddUser.postalCodeInput,
        contact.postalCode
      );
      await FormUtils.fillInputField(AddUser.countryInput, contact.country);
      await FormUtils.clickButton(AddUser.submitButton);

      const contactList = await $("//div[@class='main-content']//h1");
      expect(contactList).toBeDisplayed();
      await browser.pause(2000);
    }

    await browser.pause(10000);
  });
});
