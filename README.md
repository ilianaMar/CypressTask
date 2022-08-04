# Cypress Task
### Setup the project
- Install yarn - https://classic.yarnpkg.com/lang/en/docs/install/
- Clone repo and in the same directory run **yarn install** to install all dependencies for a project
- Create trello-auth.json in **cypress/support/config** directory and follow sample to add **cypress/support/config/trello-auth.json.dist** to add your credentials

### Run tests
- Run tests in headless mode run **yarn run cypress**
- Run tests in cypress GUI run **yarn run cypress:open**
- Run spefic spec test file when you add **--spec {filename}** 

## Scope of project
The scope of project is to demonstrate how we can write api , e2e and mocked tests via cypress and how we can integrate cucumber with it. 
Used libraries in the project are :
- @faker-js/faker - https://www.npmjs.com/package/@faker-js/faker
- cypress-cucumber-preprocessor - https://www.npmjs.com/package/cypress-cucumber-preprocessor
- cypress-xpath - https://www.npmjs.com/package/cypress-xpath
- cypress-real-events - https://www.npmjs.com/package/cypress-real-events
- mochawesome, mochawesome-merge, mochawesome-report-generator - For more information : https://docs.cypress.io/guides/tooling/reporters#Examples 
- eslint-plugin-cypres - https://www.npmjs.com/package/eslint-plugin-cypress

## Test description
- Examples with cypress and cucumber :
  - cypress/integration/login/login.steps.js and cypress/integration/login.feature
  - cypress/integration/viewport and cypress/integration/viewport.feature
- Example with cypress tests : cypress/integration/homepage.spec.js
- Example with simple api tests : cypress/integration/trelloApiTests.spec.js
- Example with mocked api call : cypress/integration/sampleWithMockedApi.spec.js
- Execute following commands to generate reports
  - Run tests with the following parameters :  **--reporter mochawesome  --reporter-options reportDir="cypress/results",overwrite=false,html=false,json=true**
  - Run command to merge json files **npx mochawesome-merge "cypress/results/*.json" > {newFileName}.json**
  - Run command to generate html **npx marge {newFileName}.json**

  
