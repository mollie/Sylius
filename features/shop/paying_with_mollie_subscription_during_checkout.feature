@paying_with_mollie_for_order
Feature: Paying with Mollie Subscription during checkout
    In order to buy products
    As a Customer
    I want to be able to pay with Mollie Subscription

    Background:
        Given the store operates on a single channel in "United States"
        And there is a user "john@bitbag.pl" identified by "password123"
        And the store has a payment method "Mollie Subscription" with a code "mollie_subscription" and Mollie Subscription payment gateway
        And the store has a product "PHP T-Shirt" priced at "€19.99"
        And the store ships everywhere for free
        And I am logged in as "john@bitbag.pl"

    @ui
    Scenario: Successful payment
        Given I added product "PHP T-Shirt" to the cart
        And I have proceeded selecting "Mollie Subscription" payment method
        And I specify the direct debit for "B. A. Example", "NL34ABNA0243341423"
        When I confirm my order with Mollie Subscription
        Then I should be notified that my payment has been completed
