import { expect, browser, $ } from "@wdio/globals";
import Login from "../../pageObject/activityforms/login";
import FormUtils from "../../utils/activityobj/forms";
import reporter from "../../utils/reporter";

describe("Heroku_App_Export_Contacts_on_File_TC006", () => {
  it("Heroku_App_Export_Contacts_on_File_TC006", async () => {
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

    const dataTable = "//table[@id='myTable']";
    const tableData = await FormUtils.getTableData($(dataTable));

    for (let j = 1; j < tableData.length; j++) {
      const row = tableData[j];
      for (let x = 1; x < row.length; x++) {
        const column = row[x];
        await reporter.addLog(`${getIndex(x)}: ${column}`);
      }
      await reporter.addLog("\n\n");
    }
    function getIndex(index) {
      switch (index) {
        case 1:
          return "Name";
        case 2:
          return "Birthdate";
        case 3:
          return "Email";
        case 4:
          return "Phone";
        case 5:
          return "Address";
        case 6:
          return "City";
        case 7:
          return "Country";
        default:
          return "";
          break;
      }
    }
    await browser.pause(5000);
  });
});
