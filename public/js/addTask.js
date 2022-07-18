$(document).ready(function () {
    $("#backBtn").click(function() {
        location.href = "/tasks";
    })

    $('#taskForm').submit(function(e) {
        e.preventDefault();
        var task = $('#task').val();
        var status = $('#status').val();
        var owner_id = $('#owner_id').val();

        if(!task || !status || !owner_id) {
            alert('Enter required field');
            return;
        }

        var taskObj = {
            task,
            status,
            owner_id
        }

        $.ajax({
            url: '/api/tasks',
            type: 'POST',
            data: taskObj,
            success: function () {
                alert('Form submitted successfully');
                location.href = '/tasks';
            },
            error: function () {
                alert('Unable to save task');
            }
        })
    })
})