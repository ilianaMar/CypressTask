# Cypress Task
- Install yarn
- Clone repo and in the same directory run **yarn install**
- Run tests in headless mode run **yarn run cypress**
- Run tests in cypress GUI run **yarn run cypress:open**
- Examples with cypress and cucmber, visit 
  -- cypress/integration/login/login.steps.js and cypress/integration/login.feature
  -- cypress/integration/viewport and cypress/integration/viewport.feature
- Example with cypress tests : cypress/integration/homepage.spec.js
- Example with simple api tests : cypress/integration/trelloApiTests.spec.js
- Example with mocked api call : cypress/integration/sampleWithMockedApi.spec.js
- Run following commands to generate reports
  -- Run tests with the following parameters :  **--reporter mochawesome  --reporter-options reportDir="cypress/results",overwrite=false,html=false,json=true**
  -- Run command to merge json files **npx mochawesome-merge "cypress/results/*.json" > {newFileName}.json**
  -- Rum command to generate html **npx marge {newFileName}.json**

  
