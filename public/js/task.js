$(document).ready(function () {
    $("#addBtn").click(function () {
        location.href = "/tasks/add";
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

        location.href = `/tasks/edit/${checkedIds[0]}`;
       
    })
})