$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TC_1.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login functionality",
  "description": "",
  "id": "application-login;test-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on truVault login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login value is \"true\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "application-login;test-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "application-login;test-login-functionality;;1"
    },
    {
      "cells": [
        "S5_Internal_F_Approver@sbjnj.com",
        "Test@2019"
      ],
      "line": 13,
      "id": "application-login;test-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Test login functionality",
  "description": "",
  "id": "application-login;test-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on truVault login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"S5_Internal_F_Approver@sbjnj.com\" and password \"Test@2019\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login value is \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TC_1_stepDefinition.user_is_on_facebook_login_page()"
});
formatter.result({
  "duration": 11825124174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S5_Internal_F_Approver@sbjnj.com",
      "offset": 13
    },
    {
      "val": "Test@2019",
      "offset": 61
    }
  ],
  "location": "TC_1_stepDefinition.user_enters_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 1091365538,
  "status": "passed"
});
formatter.match({
  "location": "TC_1_stepDefinition.click_on_submit()"
});
formatter.result({
  "duration": 96170297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 16
    }
  ],
  "location": "TC_1_stepDefinition.login_value_is_something(String)"
});
formatter.result({
  "duration": 261957420,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Test negative scenario for login  functionality",
  "description": "",
  "id": "application-login;test-negative-scenario-for-login--functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is on truVault login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cusername\u003e\" and password \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Login value is \"false\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "application-login;test-negative-scenario-for-login--functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "application-login;test-negative-scenario-for-login--functionality;;1"
    },
    {
      "cells": [
        "S5_Internal_F_Approver@sbjnj.com",
        "Test2019"
      ],
      "line": 24,
      "id": "application-login;test-negative-scenario-for-login--functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Test negative scenario for login  functionality",
  "description": "",
  "id": "application-login;test-negative-scenario-for-login--functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is on truVault login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"S5_Internal_F_Approver@sbjnj.com\" and password \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Login value is \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TC_1_stepDefinition.user_is_on_facebook_login_page()"
});
formatter.result({
  "duration": 12743646370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S5_Internal_F_Approver@sbjnj.com",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 61
    }
  ],
  "location": "TC_1_stepDefinition.user_enters_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 1054484619,
  "status": "passed"
});
formatter.match({
  "location": "TC_1_stepDefinition.click_on_submit()"
});
formatter.result({
  "duration": 94107840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 16
    }
  ],
  "location": "TC_1_stepDefinition.login_value_is_something(String)"
});
formatter.result({
  "duration": 985489457,
  "status": "passed"
});
});