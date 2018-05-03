@cancelling_mollie_subscription
Feature: Cancelling subscription
    In order to mark subscription state as cancelled
    As a Customer
    I want to be able to cancel an subscription

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Angel T-Shirt"
        And the store ships everywhere for free
        And the store has a payment method "Mollie Subscription" with a code "mollie_subscription" and Mollie Subscription payment gateway
        And I am a logged in customer
        And I placed an order "#00000666"
        And this order has an active mollie subscription
        And I bought a single "Angel T-Shirt"
        And I addressed it to "Lucifer Morningstar", "Seaside Fwy", "90802" "Los Angeles" in the "United States" with identical billing address
        And I chose "Free" shipping method with "Mollie Subscription" payment

    @ui
    Scenario: Cancelling subscription
        When I browse my orders
        And I cancel this subscription
        Then I should be notified that it has been successfully canceled
