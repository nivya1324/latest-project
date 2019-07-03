Feature: Application Login

Scenario Outline: Test login functionality


Given User is on truVault login page
When User enters "<username>" and password "<password>"
And click on submit
Then Login value is "true"

 Examples:
 | username | password |
 | S5_Internal_F_Approver@sbjnj.com| Test@2019|

Scenario Outline: Test negative scenario for login  functionality

Given User is on truVault login page
When  User enters "<username>" and password "password"
And click on submit
Then Login value is "false"

 Examples:
 | username | password |
 | S5_Internal_F_Approver@sbjnj.com| Test2019|

 