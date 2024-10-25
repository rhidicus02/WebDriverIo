import { expect, browser, $ } from "@wdio/globals";
import Form2 from "../pageObject/form2";
import objUtil from "../utils/objUtil";
import File from "../utils/file";

describe("My Login application", () => {
  it("Fill Sample Form_TC002", async () => {
    await File.appendTxtFile(global.strPath, "Step 1 - Navigate to Link");
    await Form2.navigate();

    await objUtil.clickObject(Form2.contactNameEdit);

    await File.appendTxtFile(global.strPath, "Step 2 - User fill contact name");
    await objUtil.setObjectValue(
      Form2.contactNameEdit,
      "This is my Contact Name"
    );

    await File.appendTxtFile(
      global.strPath,
      "Step 3 - User fill contact message field"
    );
    await objUtil.setObjectValue(
      Form2.contactMessageEdit,
      "This is my Test container"
    );

    await File.appendTxtFile(
      global.strPath,
      "Step 4 - User fill captcha message"
    );
    await objUtil.setObjectValue(Form2.contactCaptchaEdit, "21");

    await File.appendTxtFile(
      global.strPath,
      "Step 5 - User click submit button"
    );
    await objUtil.clickObject(Form2.submitButton);

    await expect(Form2.successMessage).toHaveText(
      "You entered the wrong number in captcha."
    );

    // const strSuccessMessage = await objUtil.getObjectText(Form.successMessage);
    // await expect(strSuccessMessage).to.equals("Thanks");
    await browser.pause(5000);

    // await browser.url(`https://ultimateqa.com/filling-out-forms/`);
    // await $('//input[@id= "et_pb_contact_name_1"]').waitForExist({
    //   timeout: 3000,
    // });
    // await $('//input[@id= "et_pb_contact_name_1"]').setValue("TestingisFun");
    // await $('//textarea[@id= "et_pb_contact_message_1"]').setValue(
    //   "Same Testing message"
    // );
    // await $('//input[@class="input et_pb_contact_captcha"]').setValue("21");
    // await $('//div[@id="et_pb_contact_form_1"]//button').click();
    // await $('//div[@class="et-pb-contact-message"]//ul/li').waitForExist();
    // await browser.pause(5000);
  });
});
