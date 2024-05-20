//variables
// const generalBtn = document.getElementById("genral");
// const businessBtn = document.getElementById("business");
// const sportsBtn = document.getElementById("sport");
// const entertainmentBtn = document.getElementById("entertainment");
// const technologyBtn = document.getElementById("technology");
// const searchBtn = document.getElementById("searchBtn");


// const newsQuery = document.getElementById("newsQuery");
// const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");
//apis
const API_KEY = "pub_4450810716ff32cbbde27fda8ca57d7c4b416"
const sources_news = "https://newsdata.io/api/1/latest?apikey=pub_4450810716ff32cbbde27fda8ca57d7c4b416"

newsDataArr = [];


const fetchSourceNews = async () => {
    const response = await fetch(sources_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const newsJson = await response.json();
        newsDataArr = newsJson.results;
        console.log(newsDataArr)
    }else{
        console.error()
        console.log(response.status, response.statusText)
    }
    displayNews();
}
fetchSourceNews()


function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.pubDate.split(" ");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","250px");
        image.setAttribute("width","100%");
        image.src=news.image_url;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description.substring(0, 100);

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.source_url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}

