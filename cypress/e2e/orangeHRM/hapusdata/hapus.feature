Feature: Admin Feature

    scenario fitur hapus admin dimulai dengan login
    
    Scenario: Admin fitur dengan login
        Given membuka halaman login
        And validasi homepage
        When masukan username
        And masukan password
        Then klik button login
        Then masuk halaman dashboard
        When klik admin
        And validasi halaman admin
        When klik hapus data user
        Then konfirm hapus data user
        Then validasi hapus data berhasil