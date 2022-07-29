Feature: Cucumber examples 

Scenario: User cannot login with invalid credentials
    Given user visits login page
    When user adds invalid credentials
    Then user is not logged in with invalid credentials

Scenario: User cannot login with empty credentials
    Given user visits login page
    When user adds empty credentials
    Then user is not logged in with empty credentials 

Scenario: User fill forgot password successfully
    Given user visits login page
    When user fills in email in forgot password page
    Then forgot password request is sent successfully