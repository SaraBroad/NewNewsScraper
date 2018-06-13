
    $.getJSON("/articles", function(data){
        for (var i = 0; i < data.length; i++) {
            $("#articles").append("title-results" + data[i].title + "summary-results" + data[i].summary + "link-results" + data[i].link);
        }
    });

