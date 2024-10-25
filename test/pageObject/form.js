class Form {
  get contactNameEdit() {
    return $('//input[@id= "et_pb_contact_name_0"]');
  }
  get contactMessageEdit() {
    return $('//textarea[@id= "et_pb_contact_message_0"]');
  }
  get submitButton() {
    return $('//button[@class="et_pb_contact_submit et_pb_button"][1]');
  }
  get successMessage() {
    return $('//div[class="et-pb-contact-message"]//p');
  }
  async navigate() {
    await browser.url(`https://ultimateqa.com/filling-out-forms/`);
  }
}
export default new Form();
