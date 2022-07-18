$(document).ready(function() {
    $('#regForm').submit(function(e) {
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();

        if(!email || !password) {
            alert('Please enter required field');
            return;
        }

        var regObj = {
            email,
            password
        }

        $.ajax({
            url: '/api/admin',
            type: 'POST',
            data: regObj,
            success: function() {
                alert('Admin registered successfully');
                location.href = '/';
            },
            error: function() {
                alert('Unable to register');
            }
        })
    })
})