@managing_mollie_payment_method
Feature: Enable a mollie options for recurring subscription
  In order to pay for orders in different ways
  As an Administrator
  I want to enable a new options for recurring subscription to the registry

  Background:
    Given the store operates on a channel named "Web-EUR" in "EUR" currency
    And I am logged in as an administrator
    And the store has a payment method "Mollie Subscription" with a code "mollie_subscription" and Mollie Subscription payment gateway

  @ui @javascript
    Scenario: Loading payment methods for recurring subscription
      Given I am browsing payment methods
      Then I want to modify the "Mollie Subscription" payment method
      When I save my changes
      Then I should be notified with success "Payment method has been successfully updated." message
      Then I can load payment methods
      And I should be notified with success "Methods was successfully updated" message
      And I enable "iDEAL" payment method
      And I enable "Credit card" payment method
      And I save my changes
      Then I should be notified with success "Payment method has been successfully updated." message
