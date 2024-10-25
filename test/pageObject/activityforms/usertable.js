//AddUserForm.js
class AddUserForm {
  get firstNameInput() {
    return $("//form[@id='add-contact']//input[@id='firstName']");
  }

  get lastNameInput() {
    return $("//form[@id='add-contact']//input[@id='lastName']");
  }

  get birthdayInput() {
    return $("//form[@id='add-contact']//input[@id='birthdate']");
  }

  get emailInput() {
    return $("//form[@id='add-contact']//input[@id='email']");
  }

  get phoneInput() {
    return $("//form[@id='add-contact']//input[@id='phone']");
  }

  get streetAddress1Input() {
    return $("//form[@id='add-contact']//input[@id='street1']");
  }

  get streetAddress2Input() {
    return $("//form[@id='add-contact']//input[@id='street2']");
  }

  get cityInput() {
    return $("//form[@id='add-contact']//input[@id='city']");
  }

  get stateInput() {
    return $("//form[@id='add-contact']//input[@id='stateProvince']");
  }

  get postalCodeInput() {
    return $("//form[@id='add-contact']//input[@id='postalCode']");
  }

  get countryInput() {
    return $("//form[@id='add-contact']//input[@id='country']");
  }
  get countryEditInput() {
    return $("//form[@id='edit-contact']//input[@id='country']");
  }

  get submitButton() {
    return $("//button[@form='add-contact']");
  }
  get submitEditButton() {
    return $("//div[@class='main-content']//button[@id='submit']");
  }
  get lastRow() {
    return $("//table[@id='myTable']//tr[3]");
  }
  get deleteButton() {
    return $("//div[@class='main-content']//button[@id='delete']");
  }

  async navigateToAddUserForm() {
    await browser.url(
      "https://thinking-tester-contact-list.herokuapp.com/addContact "
    );
  }
}

export default new AddUserForm();
