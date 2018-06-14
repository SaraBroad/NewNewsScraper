
$(document).on('click', '#scrape-btn', function() {
    console.log('clicked');
    $.getJSON("/scrape", function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            $("#articles").append("title-results" + data[i].title + "summary-results" + data[i].summary + "link-results" + data[i].link)
        }
    });
})

//redirect 
//need link to articles route




//   <div class="panel panel-default">
//     {{#each Article}}
//     <div class="panel-heading">
//         <div id="title-results">
//             {{this.title}}
//             <button type="submit" class="btn btn-default save-btn">Save Article</button>
//         </div>
//     </div>
//     <div class="panel-body">
//         <div id="summary-results">
//             {{this.summary}}
//         </div>
//         <div id="link-results">
//             {{this.link}}
//         </div>
//     </div>
//     {{/each}}
// </div>