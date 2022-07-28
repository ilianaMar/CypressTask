Feature: Cypress view port examples

Scenario Outline: User open home page on diffent viewport <viewport>
Given user visits homepage on different viewport "<viewport>"
Then  user sees screen in expected size

Examples:
    | viewport          | 
    | imac              |
    | iphone-se         |
    | samsung-s10-plus  |
    | ipad-pro          |
    | ms-surface        |
