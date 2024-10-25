class Form2 {
  get contactNameEdit() {
    return $('//input[@id= "et_pb_contact_name_1"]');
  }
  get contactMessageEdit() {
    return $('//textarea[@id= "et_pb_contact_message_1"]');
  }
  get contactCaptchaEdit() {
    return $('//input[@class="input et_pb_contact_captcha"]');
  }
  get submitButton() {
    return $('//div[@id="et_pb_contact_form_1"]//button');
  }
  get successMessage() {
    return $('//div[@class="et-pb-contact-message"]//ul/li');
  }
  async navigate() {
    await browser.url(`https://ultimateqa.com/filling-out-forms/`);
  }
}
export default new Form2();
