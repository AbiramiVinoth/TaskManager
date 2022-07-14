$(document).ready(function () {
    $("#addBtn").click(function () {
        location.href = "/users/add";
    })

    $('#deleteBtn').click(function () {
        var checkCount = ($(":checkbox:checked").length);

        if (checkCount != 1) {
            alert("Please Select One Checkbox");
            return;
        }

        var result = confirm("Are you Sure");
        if (!result) {
            return;
        }
        alert(" deleted Successfully");
    })

    $('#editBtn').click(function () {
        var checkCount = ($(":checkbox:checked").length);

        if (checkCount != 1) {
            alert("Please Select One Checkbox");
            return;
        }
        location.href = '/users/edit';
    })
})