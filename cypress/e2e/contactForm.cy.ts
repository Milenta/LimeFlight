import type { pricingData } from "./pricing"; // import interface
import { Pricing } from "../pages/Pricing"; // import class
const pricing = new Pricing(); // new instance of class

describe("LimeFlight QA challenge tests - contact form", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  describe("Unit tests", () => {
    it("Validate user input fields in contact form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.wait(150);
      pricing.clickButton("Contact Sales");
      // cy.get("button").contains("Contact Sales").click({ force: true });
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.contactFormInputUserData("firstName", data.firstName);
        pricing.contactFormInputUserData("lastName", data.lastName);
        pricing.contactFormInputUserData("email", data.email);
        pricing.contactFormInputUserData("company", data.company);
        pricing.contactFormInputUserData("message", data.message);

        pricing.contactValidateUserInput("firstName", data.firstName);
        pricing.contactValidateUserInput("lastName", data.lastName);
        pricing.contactValidateUserInput("email", data.email);
        pricing.contactValidateUserInput("company", data.company);
        pricing.contactValidateUserInput("message", data.message);
      });
    });
    it("Validate user name error message in contact form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.wait(150);
      pricing.clickButton("Contact Sales");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.contactFormInputUserData("lastName", data.lastName);
        pricing.contactFormInputUserData("email", data.email);
        pricing.contactFormInputUserData("company", data.company);
        pricing.contactFormInputUserData("message", data.message);
        pricing.submitCheckErrorMessage(
          "form__Grid-sc-1y50ako-3",
          "firstName",
          "Get Started"
        );
      });
    });

    it("Validate user last name error message in contact form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.wait(150);
      pricing.clickButton("Contact Sales");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.contactFormInputUserData("firstName", data.firstName);
        pricing.contactFormInputUserData("email", data.email);
        pricing.contactFormInputUserData("company", data.company);
        pricing.contactFormInputUserData("message", data.message);
        pricing.submitCheckErrorMessage(
          "form__Grid-sc-1y50ako-3",
          "lastName",
          "Get Started"
        );
      });
    });

    it("Validate user email error message in contact form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.wait(150);
      pricing.clickButton("Contact Sales");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.contactFormInputUserData("firstName", data.firstName);
        pricing.contactFormInputUserData("lastName", data.lastName);
        pricing.contactFormInputUserData("company", data.company);
        pricing.contactFormInputUserData("message", data.message);

        pricing.submitCheckErrorMessage(
          "form__Grid-sc-1y50ako-3",
          "email",
          "Get Started"
        );
      });
    });

    it("Validate user company error message in contact form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.wait(150);
      pricing.clickButton("Contact Sales");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.contactFormInputUserData("firstName", data.firstName);
        pricing.contactFormInputUserData("lastName", data.lastName);
        pricing.contactFormInputUserData("email", data.email);
        pricing.contactFormInputUserData("message", data.message);

        pricing.submitCheckErrorMessage(
          "form__Grid-sc-1y50ako-3",
          "company",
          "Get Started"
        );
      });
    });

    it("Validate all modules fields can be checked and unchecked in contact form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.wait(150);
      pricing.clickButton("Contact Sales");

      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "Platform",
        "not.be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "LoadPlanning",
        "not.be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "MealPlanning",
        "not.be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "MobileApp",
        "not.be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "InventoryManagement",
        "not.be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "RouteOptimization",
        "not.be.checked"
      );

      pricing.selectModule("form__Grid-sc-1y50ako-3", "Platform", "be.checked");
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "LoadPlanning",
        "be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "MealPlanning",
        "be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "MobileApp",
        "be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "InventoryManagement",
        "be.checked"
      );
      pricing.selectModule(
        "form__Grid-sc-1y50ako-3",
        "RouteOptimization",
        "be.checked"
      );
    });
    it("Validate checkbox for newsletters or offers in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.wait(150);
      pricing.clickButton("Contact Sales");

      pricing.clickCheckboxAndValidateContactForm("not.be.checked");
      pricing.clickCheckboxAndValidateContactForm("be.checked");
    });
  });
  describe("Integration tests", () => {
    it("Validate contact form can be sent", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.wait(150);
      pricing.clickButton("Contact Sales");
      // cy.get("button").contains("Contact Sales").click({ force: true });
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.contactFormInputUserData("firstName", data.firstName);
        pricing.contactFormInputUserData("lastName", data.lastName);
        pricing.contactFormInputUserData("email", data.email);
        pricing.contactFormInputUserData("company", data.company);
        pricing.contactFormInputUserData("message", data.message);

        pricing.clickButton("Get Started");
      });
      pricing.checkValidationMessage();
    });
  });
});
