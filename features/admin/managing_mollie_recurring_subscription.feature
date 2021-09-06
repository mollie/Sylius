@managing_mollie_payment_method
Feature: Adding a new mollie recurring subscription
    In order to pay for orders in different ways
    As an Administrator
    I want to add a new recurring subscription to the registry

    Background:
        Given the store operates on a channel named "Web-EUR" in "eur" currency
        And I am logged in as an administrator

    @ui
    Scenario: Adding a new mollie payment method
        Given I want to create a new Mollie recurring subscription
        When I name it "Mollie Recurring Subscription" in "English (United States)"
        And I specify its code as "mollie_recurring_subscription_test"
        And I fill the Profile ID with "pfl_6nBFHppqBs"
        And I fill the API key with "test_jdqkCbp55GRnfb9nFRz7R555pJMW444"
        And I fill the times with "3"
        And I fill the interval with "1 months"
        And make it available in channel "Web-EUR"
        And I add it
        Then I should be notified that it has been successfully created
        And the payment method "Mollie Recurring Subscription" should appear in the registry
