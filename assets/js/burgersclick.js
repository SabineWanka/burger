//Click Event Functions 

$(function () {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newDouver = $(this).data("newsleep");

        var newDevourState = {
            douvered: newDouver
        };


        // Sending PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devoure to", newDouver);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),

        };

        // sending post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
