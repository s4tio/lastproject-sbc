Feature: Admin Feature

    scenario fitur search admin dimulai dengan login
    
    Scenario: Admin fitur dengan login
        Given membuka halaman login
        And validasi homepage
        When masukan username
        And masukan password
        Then klik button login
        Then masuk halaman dashboard
        When klik admin
        And validasi halaman admin
        When cari username
        And cari user role
        And klik cari user role
        And cari nama karyawan
        And klik nama karyawan
        And cari user status
        And klik user status
        Then klik cari user
        Then validasi cari user