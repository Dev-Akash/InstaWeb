function createDivImage(img_url){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.style.width = "400px";
    img.style.height = "400px";
    img.src = img_url;
    div.appendChild(img);
    div.style.margin = "10px";
    div.style.float = "left";
    document.body.appendChild(div);
}

function fetch(){
    var jsonRes;
    var URL ="https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=IGQVJVb3VyR2N0LTB4UXBCSEFXM0NwbXVzbnQtNFVoaGJzOUZAJeERJZAU9YbjRyRkZAxN1JlUmlyUjZANTEZA1TUlJc2hNX1NNQ2F1U05tZAG5qOElsamN6OUk2UmhQRjBEOGtRdjFWSV9R"
    var httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4){
            jsonRes = JSON.parse(httpx.responseText);
            //console.log(jsonRes.data);
            var resLen = jsonRes.data.length
            document.getElementById("posts").innerHTML="Total Number of Posts: "+ resLen;

            for(var i=0; i<resLen; i++){
                //jsonRes.data[i];
                console.log(jsonRes.data[i]);
                var type = jsonRes.data[i].media_type;
                if(type == "IMAGE" | type == "CAROUSEL_ALBUM"){
                    createDivImage(jsonRes.data[i].media_url);
                }
            }
        }
    };
    httpx.open("GET", URL, true);
    httpx.send();
}

fetch();
