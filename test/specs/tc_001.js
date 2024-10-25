import { expect, browser, $ } from "@wdio/globals";
import Form from "../pageObject/form";
import objUtil from "../utils/objUtil";
import Reporter from "../utils/reporter";

describe("My Login application", () => {
  it("Fill Sample Form_TC001", async () => {
    await Reporter.addLog("Navigate to Link");
    await Form.navigate();

    await Reporter.addLog("User fill contact name");

    await objUtil.setObjectValue(
      Form.contactNameEdit,
      "This is my Contact Name"
    );

    await Reporter.addLog("User fill contact message field");
    await objUtil.setObjectValue(
      Form.contactMessageEdit,
      "This is my Test container"
    );

    await Reporter.addLog("User click submit button");

    await expect(Form.successMessage).toHaveText("Thanks for contacting us");

    // const strSuccessMessage = await objUtil.getObjectText(Form.successMessage);
    // await expect(strSuccessMessage).to.equals("Thanks");
    await browser.pause(5000);
  });
});
