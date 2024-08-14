import type { pricingData } from "./pricing"; // import interface
import { Pricing } from "../pages/Pricing"; // import class
const pricing = new Pricing(); // new instance of class

describe("LimeFlight QA challenge tests - pricing form", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  describe("Unit tests", () => {
    it("Validate user input fields in pricing form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.pricingValidateUserInput("firstName", data.firstName);
        pricing.pricingValidateUserInput("lastName", data.lastName);
        pricing.pricingValidateUserInput("email", data.email);
        pricing.pricingValidateUserInput("company", data.company);
        pricing.pricingValidateUserInput("message", data.message);
      });
    });
    it("Validate user name error message in pricing form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("lastName", data.firstName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);
        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
        pricing.submitCheckErrorMessage(
          "form__Grid-sc-1ya1gja-2",
          "firstName",
          "Get Price",
        );
      });
    });

    it("Validate user last name error message in pricing form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);
        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
        pricing.submitCheckErrorMessage(
          "form__Grid-sc-1ya1gja-2",
          "lastName",
          "Get Price",
        );
      });
    });

    it("Validate user email error message in pricing form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);
        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
        pricing.submitCheckErrorMessage(
          "form__Grid-sc-1ya1gja-2",
          "email",
          "Get Price",
        );
      });
    });

    it("Validate user company error message in pricing form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("message", data.message);
        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
        pricing.submitCheckErrorMessage(
          "form__Grid-sc-1ya1gja-2",
          "company",
          "Get Price",
        );
      });
    });
    it("Validate all modules fields can be checked and unchecked in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "Platform",
        "not.be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "LoadPlanning",
        "not.be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "MealPlanning",
        "not.be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "MobileApp",
        "not.be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "InventoryManagement",
        "not.be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "RouteOptimization",
        "not.be.checked",
      );
      pricing.selectModule("form__Grid-sc-1ya1gja-2", "Platform", "be.checked");
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "LoadPlanning",
        "be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "MealPlanning",
        "be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "MobileApp",
        "be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "InventoryManagement",
        "be.checked",
      );
      pricing.selectModule(
        "form__Grid-sc-1ya1gja-2",
        "RouteOptimization",
        "be.checked",
      );
    });
    it("Validate checkbox for newsletters or offers in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");

      pricing.clickCheckboxAndValidate("not.be.checked");
      pricing.clickCheckboxAndValidate("be.checked");
    });
    it("Validate Number of aircrafts price factor field error message in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });

      pricing.submitCheckErrorMessage(
        "form__PriceFactor-sc-1ya1gja-4",
        "Number of aircrafts",
        "Get Price",
      );
    });

    it("Validate One-way flights per year price factor field error message in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });

      pricing.submitCheckErrorMessage(
        "form__PriceFactor-sc-1ya1gja-4",
        "One-way flights / year",
        "Get Price",
      );
    });

    it("Validate Number of guests per year price factor field error message in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
      });

      pricing.submitCheckErrorMessage(
        "form__PriceFactor-sc-1ya1gja-4",
        "Number of guests / year",
        "Get Price",
      );
    });
  });
  describe("Integration tests", () => {
    it("Validate user input fields in pricing form for user data", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);
        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );

        cy.get("button").contains("Get Price").click();

        cy.intercept(
          "POST",
          "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
          (req) => {
            const { body } = req;
            expect(body.fields[0].value).to.eq(data.email);
            expect(body.fields[1].value).to.eq(data.firstName);
            expect(body.fields[2].value).to.eq(data.lastName);
            expect(body.fields[3].value).to.eq(data.company);
          },
        );
      });
      pricing.checkValidationMessage();
    });
    it("Validate all modules fields are checked in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });
      pricing.clickButton("Get Price");

      cy.intercept(
        "POST",
        "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
        (req) => {
          const { body } = req;
          expect(body.fields[4].value).to.eq("Platform");
          expect(body.fields[5].value).to.eq("LoadPlanning");
          expect(body.fields[6].value).to.eq("MealPlanning");
          expect(body.fields[7].value).to.eq("MobileApp");
          expect(body.fields[8].value).to.eq("InventoryManagement");
          expect(body.fields[9].value).to.eq("RouteOptimization");
        },
      );

      pricing.checkValidationMessage();
    });

    it("Validate only Platform module field is checked in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "LoadPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MealPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MobileApp",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "InventoryManagement",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "RouteOptimization",
          "not.be.checked",
        );

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });
      pricing.clickButton("Get Price");

      cy.intercept(
        "POST",
        "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
        (req) => {
          const { body } = req;
          expect(body.fields[4].value).to.eq("Platform");
        },
      );

      pricing.checkValidationMessage();
    });

    it("Validate only LoadPlanning module field is checked in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "Platform",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MealPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MobileApp",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "InventoryManagement",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "RouteOptimization",
          "not.be.checked",
        );

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });
      pricing.clickButton("Get Price");

      cy.intercept(
        "POST",
        "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
        (req) => {
          const { body } = req;
          expect(body.fields[4].value).to.eq("LoadPlanning");
        },
      );
      pricing.checkValidationMessage();
    });

    it("Validate only MealPlanning module field is checked in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "Platform",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "LoadPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MobileApp",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "InventoryManagement",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "RouteOptimization",
          "not.be.checked",
        );

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });
      pricing.clickButton("Get Price");

      cy.intercept(
        "POST",
        "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
        (req) => {
          const { body } = req;
          expect(body.fields[4].value).to.eq("MealPlanning");
        },
      );
      pricing.checkValidationMessage();
    });

    it("Validate only MobileApp module field is checked in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "Platform",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "LoadPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MealPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "InventoryManagement",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "RouteOptimization",
          "not.be.checked",
        );

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });
      pricing.clickButton("Get Price");

      cy.intercept(
        "POST",
        "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
        (req) => {
          const { body } = req;
          expect(body.fields[4].value).to.eq("MobileApp");
        },
      );
      pricing.checkValidationMessage();
    });

    it("Validate only InventoryManagement module field is checked in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "Platform",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "LoadPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MealPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MobileApp",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "RouteOptimization",
          "not.be.checked",
        );

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });
      pricing.clickButton("Get Price");

      cy.intercept(
        "POST",
        "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
        (req) => {
          const { body } = req;
          expect(body.fields[4].value).to.eq("InventoryManagement");
        },
      );
      pricing.checkValidationMessage();
    });

    it("Validate only RouteOptimization module field is checked in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "Platform",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "LoadPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MealPlanning",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "MobileApp",
          "not.be.checked",
        );
        pricing.selectModule(
          "form__Grid-sc-1ya1gja-2",
          "InventoryManagement",
          "not.be.checked",
        );

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );
      });
      pricing.clickButton("Get Price");

      cy.intercept(
        "POST",
        "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
        (req) => {
          const { body } = req;
          expect(body.fields[4].value).to.eq("RouteOptimization");
        },
      );
      pricing.checkValidationMessage();
    });
    it("Validate price factors fields are filled out in pricing form", () => {
      cy.visit("https://test.limeflight.com/pricing/");
      cy.fixture("pricingFormData").then((data: pricingData) => {
        pricing.pricingFormInputUserData("firstName", data.firstName);
        pricing.pricingFormInputUserData("lastName", data.lastName);
        pricing.pricingFormInputUserData("email", data.email);
        pricing.pricingFormInputUserData("company", data.company);
        pricing.pricingFormInputUserData("message", data.message);

        pricing.pricingFormInputPriceFactors(
          "Number of aircrafts",
          data.numAircrafts,
        );
        pricing.pricingFormInputPriceFactors(
          "One-way flights / year",
          data.oneWayFlights,
        );
        pricing.pricingFormInputPriceFactors(
          "Number of guests / year",
          data.guests,
        );

        pricing.clickButton("Get Price");

        cy.intercept(
          "POST",
          "https://api.hsforms.com/submissions/v3/integration/submit/4314722/f182c59e-6cdc-4ce2-ba39-87f6114165f3",
          (req) => {
            const { body } = req;
            expect(body.fields[10].value).to.eq(data.numAircrafts);
            expect(body.fields[11].value).to.eq(data.oneWayFlights);
            expect(body.fields[12].value).to.eq(data.guests);
          },
        );
      });
      pricing.checkValidationMessage();
    });
  });
});
