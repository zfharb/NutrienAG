


class CheckboxesPage {
  get elements() {
    return {
      header: () => $("h3"),
      checkbox: (num) => $(`input:nth-child(${num})`),
    };
  }

  async select(num) {
    const checkbox = await this.elements.checkbox(num);
    if (!await checkbox.isSelected()) {
      await checkbox.click();
    }
  }
}

export default new CheckboxesPage();