Feature: Cucumber examples 

Scenario: User cannot login with invalid email
    Given user visits home page
    When user adds invalid "email"
    Then user is not logged in

Scenario: User cannot login with invalid password
    Given user visits home page
    When user adds invalid "password"
    Then user is not logged in