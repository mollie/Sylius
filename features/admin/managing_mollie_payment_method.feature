@managing_mollie_payment_method
Feature: Adding a new mollie payment method
    In order to pay for orders in different ways
    As an Administrator
    I want to add a new payment method to the registry

    Background:
        Given the store operates on a channel named "Web-USD" in "USD" currency
        And I am logged in as an administrator

    @ui
    Scenario: Adding a new mollie payment method
        Given I want to create a new Mollie payment method
        When I name it "Mollie" in "English (United States)"
        And I specify its code as "mollie_test"
        And I fill the API key with "test_jdqkCbp55GRnfb9nFRz7R555pJMW444"
        And make it available in channel "Web-USD"
        And I add it
        Then I should be notified that it has been successfully created
        And the payment method "Mollie" should appear in the registry
