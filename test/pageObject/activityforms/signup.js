// SignUpForm.js

class SignUpForm {
  get firstNameInput() {
    return $("//form[@id='add-user']//input[@id='firstName']");
  }
  get lastNameInput() {
    return $("//form[@id='add-user']//input[@id='lastName']");
  }

  get emailInput() {
    return $("//form[@id='add-user']//input[@id='email']");
  }

  get passwordInput() {
    return $("//form[@id='add-user']//input[@id='password']");
  }

  get submitButton() {
    return $("//div[@class='main-content']//button[@form='add-user']"); // Adjust the selector as needed
  }

  async navigateToSignUp() {
    await browser.url(
      "https://thinking-tester-contact-list.herokuapp.com/addUser "
    );
  }
}

export default new SignUpForm();
