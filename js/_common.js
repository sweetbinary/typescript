function clog(str) {
    console.log(str);
}

function clog_table(str) {
    console.table(str);
}

function clog_dom(str) {    
    let templet = document.getElementById("preContainer").innerHTML;
    
    str = str.replace(/\/\*ZZZ/g, "</pre><pre class='garbage comment'>");
    str = str.replace(/\*ZZZ\//g, "</pre><pre class='zero-margin'>");

    str = str.replace(/\/\*==/g, "</pre><pre class='bullet-comment'>");
    str = str.replace(/==\*\//g, "</pre><pre class='zero-margin'>");

    str = str.replace(/\/\*---/g, "</pre><pre class='subcomment no-margin'>");
    str = str.replace(/---\*\//g, "</pre><pre>");

    str = str.replace(/\/\*--/g, "</pre><pre class='subcomment'>");
    str = str.replace(/--\*\//g, "</pre><pre>");

    str = str.replace(/\/\*/g, "</pre><pre class='comment'>");
    str = str.replace(/\*\//g, "</pre><pre class='zero-margin'>");

    document.getElementById("preContainer").innerHTML ="<pre class=''>" + templet + str + "\n</pre>"; 
}

function clog_clear() {
    document.getElementById("preContainer").innerHTML = ""; 
    console.clear();
    $("#mainHeader").text(" ");
}

//
function exzzz() {
//

    

    clog("\n================================ \n\n\n");
}

var default_title = document.title;
//window.alert(default_title);

$(document).ready(function () {   

    for (var f in window) {
        if (window.hasOwnProperty(f) && typeof window[f] === 'function') {            
            if (f.includes("ex_")){

                let f2 = f.replace("ex_","").replace(/_/g, " ");  
                f2 = f2.slice(3);  
                let buttonMarkup = `<li><button class="es6-button" id="${f}" data-function="${f}">${f2}</button></li>`;
                $("#es6MainNavUl").append(buttonMarkup);

            }
        }
    }

    $("#es6MainNav .es6-button").each(function(){
        let functionName = $(this).attr("data-function");
        var f2 = functionName.replace("ex_","").replace(/_/g, " ");
        f2 = f2.slice(3);
        f2 = f2.charAt(0).toUpperCase() + f2.slice(1);
        var f3 = functionName.replace("ex_","");
        let tempVar = `clog_clear(); ${functionName}(); $('.es6-button').removeClass('active'); $('#${functionName}').addClass('active'); $('#mainHeader').html('<a href="?run_function=${functionName}">${f2}</a>');get_ts('js/${f3}.ts'); document.title = '${f2} - ${default_title}';`;                
        $(this).attr("onclick",tempVar);
        
    }); 

    let param = get_url_parameter("run_function");
    if (param != undefined){
        if (param == 'last'){
            $("#es6MainNav li:last-child .es6-button").click();
        }
        else if (param.includes("ex_")) {
            $(`#es6MainNav .es6-button#${param}`).click();
        }
    }
    else {
        //$("#es6MainNav li:last-child .es6-button").click();
    }

    

});



//get parameter from url
function get_url_parameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function get_ts(zurl) {
    $.ajax({
        mimeType: "text/plain; charset=x-user-defined",        
        url: zurl,
        method: "GET",        
        dataType: "text",     
        success: function (data)
        {
            clog_dom(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           clog("ERROR!!! (" + errorThrown + ")");
        }
    });
}

