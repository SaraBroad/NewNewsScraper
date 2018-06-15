
$(document).on('click', '#scrape-btn', function() {
    $.getJSON("/scrape", function (data) {
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            $("#articles").append("<div data-id='" + data[i]._id + "'>" + "title-results" + data[i].title + "summary-results" + data[i].summary + "link-results" + data[i].link + "</div>")
        }
    });
})

$(document).on('click', "note-btn", function(){
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/" + thisId,
        data: {
            note: $("input-comment").val()
        }
    })
    .then(function(data){
        console.log(data);
     });
});

$(document).on("click", "delete-btn", function(){
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "DELETE",
        url: "/delete/" + this.Id,
    })
    .then(function(){
        console.log("deleted")
    });
});