$(document).ready(function () {
    $("#backBtn").click(function() {
        location.href = "/users";
    })

    $('#userForm').submit(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();

        if (!name || !email || !password) {
            alert('Please enter required field');
            return;
        }

        var userObj = {
            name,
            email,
            password
        }

        $.ajax({
            url: '/api/users',
            type: 'POST',
            data: userObj,
            success: function () {
                alert('Form submitted successfully');
                location.href = '/users';
            },
            error: function () {
                alert('Unable to save user');
            }
        })
    })
})