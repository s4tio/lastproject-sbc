Feature: Login Feature

    scenario login dengan username dan password yang valid 
    
    Scenario: Login with Valid Credentials
        Given I visit the URL
        And I should see the homepage
        When I submit the Username
        And I submit the Password
        Then I click the button Login
