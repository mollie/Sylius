@paying_with_mollie_for_order
Feature: Paying with Mollie Subscription during checkout
    In order to buy products
    As a Customer
    I want to be able to pay with Mollie Subscription

    Background:
        Given the store operates on a channel named "test channel" in "EUR" currency
        Given there is a zone "The Rest of the World" containing all other countries
        And there is a user "john@bitbag.pl" identified by "password123"
        And the store has a payment method "Mollie Subscription" with a code "mollie_subscription" and Mollie Subscription payment gateway
        And gateway "mollie_subscription" has all methods loaded and enabled
        And the store has a product "PHP T-Shirt" priced at "€19.99"
        And the "PHP T-shirt" variant has recurring payment enabled
        And the store ships everywhere for free
        And the store ships to "Netherlands"
        And I am logged in as "john@bitbag.pl"

    @ui
    Scenario: Successful payment
        Given I am on "/"
        And I should see "PHP T-Shirt"
        And I click "PHP T-Shirt" item
        And I should see "Add to cart"
        And I press "Add to cart"
        And I should see "Success Item has been added to cart"
        Then I follow "Checkout"
        When I specify the billing address as "Ankh Morpork", "Frost Alley", "90210", "Netherlands" for "Jon Snow"
        Then I press "Next"
        When I proceed with "Free" shipping method
        Then I press "Next"
        When I confirm my order with Mollie Subscription
