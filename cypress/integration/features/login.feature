Feature: Cucumber examples 

Scenario: User cannot login with invalid credentials
    Given user visits home page
    When user adds invalid credentials
    Then user is not logged in with invalid credentials

Scenario: User cannot login with empty credentials
    Given user visits home page
    When user adds empty credentials
    Then user is not logged in with empty credentials 