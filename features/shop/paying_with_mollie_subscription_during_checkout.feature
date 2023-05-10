@paying_with_mollie_for_order
Feature: Paying with Mollie Subscription during checkout
    In order to buy products
    As a Customer
    I want to be able to pay with Mollie Subscription

    Background:
        Given the store operates on a single channel in "United States"
        And there is a user "john@mollie.pl" identified by "password123"
        And the store has a payment method "Mollie Subscription" with a code "mollie_subscription" and Mollie Subscription payment gateway
        And gateway "mollie_subscription" has all methods loaded and enabled
        And the store has a product "PHP T-Shirt" priced at "€19.99"
        And the "PHP T-shirt" variant has recurring payment enabled
        And the store ships everywhere for free
        And I am logged in as "john@mollie.pl"

    @ui
    Scenario: Successful payment
        Given I added product "PHP T-Shirt" to the cart
        And I have proceeded selecting "Mollie Subscription" payment method
        When I select "creditcard" as my payment option
        Then I press "Next"
        When I confirm my order
        Then I should be notified that my payment has been completed
        And I should see the thank you page
