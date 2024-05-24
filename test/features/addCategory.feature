Feature: kasirAja App

  Scenario: add category
    Given I am on the dashboard page
    When I click on category button, click on tambah, fill form input, and click simpan button
    Then I should see a success notify