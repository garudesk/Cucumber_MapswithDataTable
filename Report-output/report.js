$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Eclips%20instalation%20setup/Cucumber_MapswithDataTable/Feature/deals.feature");
formatter.feature({
  "name": "Deal data creation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[#1 Free CRM for Any Business: Online Customer Relationship Software]\u003e but was:\u003c[CRM]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDef.DealsStepWithMapDefinition.title_of_login_page_is_free_CRM(DealsStepWithMapDefinition.java:37)\r\n\tat ✽.title of login page is Free CRM(file:/C:/Eclips%20instalation%20setup/Cucumber_MapswithDataTable/Feature/deals.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});