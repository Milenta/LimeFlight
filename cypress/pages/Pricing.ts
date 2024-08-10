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
  submitCheckErrorMessage(className: string, name: string): void {
    cy.get("button").contains("Get Price").click();
    this.checkErrorMessage(className, name);
  }
  checkValidationMessage(): void {
    cy.get("header").contains("Thanks!").should("be.visible");
    cy.get("div").contains("We'll be right with you.").should("be.visible");
  }
  clickButton(name: string): void {
    cy.get("button").contains(name).click();
  }
  selectModule(name: string, isChecked: string): void {
    cy.get(`.form__Grid-sc-1ya1gja-2 [name="${name}"]`).click({ force: true });
    cy.get(`.form__Grid-sc-1ya1gja-2 [name="${name}"]`).should(isChecked);
  }
}
