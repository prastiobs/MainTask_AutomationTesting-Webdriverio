Feature: kasirAja App

  Scenario: successfull login
    Given I am on the login page
    When I login with default user
    Then I should see a dashboard page