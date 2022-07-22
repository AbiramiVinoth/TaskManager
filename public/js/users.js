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

        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");

        var checkedIds = checked.map(function () {
            return this.id;
        });
        console.log('checked id', checkedIds[0]);
        
        $.ajax({
            url: `/api/users/${checkedIds[0]}`,
            type: 'DELETE',
            success: function() {
                alert('Deleted successfully');
                location.reload();
            },
            error: function() {
                alert('Unable to delete');
            }
        })
    })

    $('#editBtn').click(function () {
        var checkCount = ($(":checkbox:checked").length);

        if (checkCount != 1) {
            alert("Please Select One Checkbox");
            return;
        }

        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");

        var checkedIds = checked.map(function () {
            return this.id;
        });

        location.href = `/users/edit/${checkedIds[0]}`;
       
    })

    $('#refresh').click(function() {
        location.href = '/users';
    })

    $('#search').click(function() {
        var name = $('#name').val();

        if(!name){
            return;
        }

        location.href = `/users?name=${name}`;
    })
})