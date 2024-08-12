export class Pricing {
  pricingFormInputUserData(selector: string, name: string): void {
    cy.get(`.form__Grid-sc-1ya1gja-2 [name="${selector}"]`).type(name);
  }
  pricingFormInputPriceFactors(selector: string, name: string): void {
    cy.get(`[name="${selector}"]`).type(name);
  }
  checkErrorMessage(className: string, name: string): void {
    cy.get(`.${className} [name="${name}"]`) //.form__Grid-sc-1ya1gja-2
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");
  }
  submitCheckErrorMessage(
    className: string,
    name: string,
    button: string
  ): void {
    cy.get("button").contains(button).click();
    this.checkErrorMessage(className, name);
  }
  checkValidationMessage(): void {
    cy.get("header").contains("Thanks!").should("be.visible");
    cy.get("div").contains("We'll be right with you.").should("be.visible");
  }
  clickButton(name: string): void {
    cy.get("button").contains(name).click({ force: true });
  }
  selectModule(moduleClass: string, name: string, isChecked: string): void {
    cy.get(`.${moduleClass} [name="${name}"]`).click({ force: true });
    cy.get(`.${moduleClass} [name="${name}"]`).should(isChecked);
  }
  clickCheckboxAndValidate(checked: string): void {
    cy.get(".title-section__FormWrapper-sc-1wdc3q2-2 p")
      .contains("You can unsubscribe")
      .prev()
      .children()
      .click({ force: true });
    cy.get(".title-section__FormWrapper-sc-1wdc3q2-2 p")
      .contains("You can unsubscribe")
      .prev()
      .children()
      .children()
      .should(checked);
  }
  contactFormInputUserData(selector: string, name: string): void {
    cy.get(`.form__Grid-sc-1y50ako-3 [name="${selector}"]`).type(name);
  }
  contactValidateUserInput(name: string, userData: string): void {
    cy.get(`.form__Grid-sc-1y50ako-3 [name="${name}"]`)
      .invoke("val")
      .then((text) => {
        expect(text).to.eq(userData);
      });
  }
  clickCheckboxAndValidateContactForm(checked: string): void {
    cy.get(".form__Container-sc-1y50ako-0 p")
      .contains("You can unsubscribe")
      .prev()
      .children()
      .click({ force: true });
    cy.get(".form__Container-sc-1y50ako-0 p")
      .contains("You can unsubscribe")
      .prev()
      .children()
      .children()
      .should(checked);
  }
}
