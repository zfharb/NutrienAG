
class BasicAuthPage {
  get message() {
    return $(".example > p");
  }

  get notAuthorizedMessage() {
    return $('//body[contains(., "Not authorized")]');
  }

  async login(username, password) {
    await this.open(username, password);
  }
  open(username, password) {
    return browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`
    );
  }
}

export default new BasicAuthPage();
