Feature: Reset Feature

    scenario melakukan reset password

    Scenario: Reset password
        Given kunjungi website
        And melihat homepage
        When klik lupa password
        And melihat halaman reset password
        And masukan username
        Then klik reset password
        Then reset password berhasil