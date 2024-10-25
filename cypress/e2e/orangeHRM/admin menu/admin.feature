Feature: Admin Feature

    scenario fitur admin dimulai dengna login
    
    Scenario: Admin fitur dengan login
        Given membuka halaman login
        And validasi homepage
        When masukan username
        And masukan password
        Then klik button login
        Then masuk halaman dashboard
        When klik admin
        And validasi halaman admin
        Then klik tambah
        When pilih user role
        Then klik user role
        And pilih user status
        And klik user status
        And masukkan namalengkap
        And klik nama user
        And masukkan username
        And masukkan password
        And masukkan confirm password
        Then simpan user data
        Then simpan data berhasil