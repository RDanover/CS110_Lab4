var sort_by_selection;
var time_frame_selection;
var key;
//view shared email
async function getResponse(num_string){
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
    //parse through array and get first 5 articles
}