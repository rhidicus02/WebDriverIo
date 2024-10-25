// LoginForm.js

class LoginForm {
  get emailInput() {
    return $("//div[@class='main-content']//input[@id='email']");
  }

  get passwordInput() {
    return $("//div[@class='main-content']//input[@id='password']");
  }

  get submitButton() {
    return $("//div[@class='main-content']//button[@id='submit']"); // Adjust the selector as needed
  }

  async navigateToLogin() {
    await browser.url("https://thinking-tester-contact-list.herokuapp.com/ ");
  }
}

export default new LoginForm();
