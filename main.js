var sort_by_selection;
var time_frame_selection;
var key = 'VimoDG1qozWj4hmfMfLa7jvp050RhDzQ';
//view shared email
async function getResponse(num_string){
    var one_title = document.getElementById("one-title");
    var one_description = document.getElementById("one-description");
    var one_date = document.getElementById("one-date");
    var one_image = document.getElementById("one-image");

    var two_title = document.getElementById("two-title");
    var two_description = document.getElementById("two-description");
    var two_date = document.getElementById("two-date");
    var two_image = document.getElementById("two-image");

    var three_title = document.getElementById("three-title");
    var three_description = document.getElementById("three-description");
    var three_date = document.getElementById("three-date");
    var three_image = document.getElementById("three-image");

    var four_title = document.getElementById("four-title");
    var four_description = document.getElementById("four-description");
    var four_date = document.getElementById("four-date");
    var four_image = document.getElementById("four-image");

    var five_title = document.getElementById("five-title");
    var five_description = document.getElementById("five-description");
    var five_date = document.getElementById("five-date");
    var five_image = document.getElementById("five-image");

    if(num_string=='0'){
        sort_by_selection = 'viewed';
        time_frame_selection = '1';
    }
    else if(num_string=='1'){
        time_frame_selection = '1';
    }
    else if(num_string=='2'){
        time_frame_selection = '7';
    }
    else if(num_string=='3'){
        time_frame_selection = '30';
    }
    else if(num_string=='a'){
        sort_by_selection = 'viewed';
    }
    else if(num_string=='b'){
        sort_by_selection = 'shared';
    }
    else if(num_string=='c'){
        sort_by_selection = 'emailed';
    }

    if(sort_by_selection=='shared'){
        url = "https://api.nytimes.com/svc/mostpopular/v2/shared/"+time_frame_selection+"/facebook.json?api-key="+key;
    }
    else{
        url = "https://api.nytimes.com/svc/mostpopular/v2/"+sort_by_selection+"/"+time_frame_selection+".json?api-key="+key;
    }
    //fetch request
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
        var i = -1;
        var article_count = -1;
        while(article_count < 5){
            try{
                i++;
                article_title = data.results[i].title;
                console.log("Title: ");
                console.log(article_title);
                article_abstract = data.results[i].abstract;
                console.log("Abstract: ");
                console.log(article_abstract);
                article_date = data.results[i].published_date;
                console.log("published_date: ");
                console.log(article_date);
                article_image_url = data.results[i].media[0]["media-metadata"][0].url;
                console.log("image url: ");
                console.log(article_image_url);
                article_count ++;
                if(article_count==0){
                    one_date.innerHTML = article_date;
                    one_description.innerHTML = article_abstract;
                    one_title.innerHTML = article_title;
                    one_image.src = article_image_url;
                }
                else if(article_count==1){
                    two_date.innerHTML = article_date;
                    two_description.innerHTML = article_abstract;
                    two_title.innerHTML = article_title;
                    two_image.src = article_image_url;
                }
                else if(article_count==2){
                    three_date.innerHTML = article_date;
                    three_description.innerHTML = article_abstract;
                    three_title.innerHTML = article_title;
                    three_image.src = article_image_url;
                }
                else if(article_count==3){
                    four_date.innerHTML = article_date;
                    four_description.innerHTML = article_abstract;
                    four_title.innerHTML = article_title;
                    four_image.src = article_image_url;
                }
                else if(article_count==4){
                    five_date.innerHTML = article_date;
                    five_description.innerHTML = article_abstract;
                    five_title.innerHTML = article_title;
                    five_image.src = article_image_url;
                }
            }
            catch(error){
                console.error("Error occurred while processing article:", error.message);
                console.log("article_count= ");
                console.log(article_count);
            }
        }
    } else {
        console.log("No articles found.");
    }
    
}